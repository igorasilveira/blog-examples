import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Doggo: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Our Doggos</title>
      </Head>

      <main>
        <h1>Check out our doggos.</h1>

        <ul style={{ color: "#0070f3" }}>
          <li>
            <Link href="/dogs/abc">ABC</Link>
          </li>
          <li>
            <Link href="/dogs/russel">Russel</Link>
          </li>
          <li>
            <Link href="/dogs/luna">Luna</Link>
          </li>
        </ul>

        <p style={{ color: "#0070f3" }}>
          <Link href="/">Back Home</Link>
        </p>
      </main>
    </div>
  );
};

export default Doggo;
