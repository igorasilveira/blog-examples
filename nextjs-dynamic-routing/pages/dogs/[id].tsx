import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Doggo: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>A Doggo</title>
      </Head>

      <main>
        {/* // -> Render the id on the screen  */}
        <h1>This is Doggo: {id}.</h1>

        <Image
          alt="This is a doggo"
          src="https://loremflickr.com/520/520/dog"
          width={520}
          height={520}
        />
        
        <p style={{color: "#0070f3"}}><Link href="/dogs">Back to Dogs</Link></p>
      </main>
    </div>
  );
};

export default Doggo;
