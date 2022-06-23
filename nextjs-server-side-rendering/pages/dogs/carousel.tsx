import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { dogs } from "../../db/dogs";

const Carousel: NextPage<{ data: Dog[] }> = ({ data }) => {
  return (
    <div>
      <main>
        <h1>Carousel</h1>

        <div
          style={{
            width: "70%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {data.map((dog) => (
            <Link href={`/dogs/${dog.id}`} key={dog.id}>
              <div style={{
                border: "1px solid #ccc",
                cursor: "pointer",
              }}>
                <h2>{dog.name}</h2>
                <p>{dog.description}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* For every dog in data array, display their name and description */}

        <p style={{ color: "#0070f3" }}>
          <Link href="/">Back to Index</Link>
        </p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // get a list of all dogs randomly sorted and limited to 2
  const data = [...dogs].sort(() => Math.random() - 0.5).slice(0, 2);

  return { props: { data } };
};

export default Carousel;
