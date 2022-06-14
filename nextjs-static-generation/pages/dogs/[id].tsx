import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { dogs as dogsDB } from "../../db/dogs";

const Doggo: NextPage<{dog: Dog}> = ({dog}) => {
  return (
    <div>
      <main>
        <h1>This is {dog.name}.</h1>
        <p>{dog.description}</p>

        <p style={{ color: "#0070f3" }}>
          <Link href="/dogs">Back to Dogs</Link>
        </p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params || !params.id) {
    return { props: {} };
  }
  
  const dog = dogsDB.find(dog => dog.id === parseInt(params.id as string));

  return {
    props: {
      dog,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dogs = dogsDB;  
  const paths = dogs.map((dog: Dog) => ({
    params: { id: dog.id.toString() },
  }));

  return { paths, fallback: false };
}

export default Doggo;
