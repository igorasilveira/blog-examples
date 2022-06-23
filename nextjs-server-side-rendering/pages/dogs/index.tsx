import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { dogs as dogsDB } from "../../db/dogs";

const Doggo: NextPage<{ dogs: Dog[] }> = ({ dogs }) => {
  return (
    <div>
      <Head>
        <title>Our Doggos</title>
      </Head>

      <main>
        <h1>Check out our doggos.</h1>

        <ul style={{ color: "#0070f3" }}>
          {dogs.map((dog) => (
            <li key={dog.id}>
              <Link href={`/dogs/${dog.id}`}>{dog.name}</Link>
            </li>
          ))}
        </ul>

        <p style={{ color: "#0070f3" }}>
          <Link href="/">Back Home</Link>
        </p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const dogs = dogsDB;

  return {
    props: {
      dogs,
    },
  };
};

export default Doggo;
