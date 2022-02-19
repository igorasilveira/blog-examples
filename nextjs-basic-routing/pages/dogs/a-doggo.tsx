import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Doggo: NextPage = () => {
  return (
    <div>
      <Head>
        <title>A Doggo</title>
      </Head>

      <main>
        <h1>
          This is a Doggo.
        </h1>

        <Image alt="This is a doggo" src='https://loremflickr.com/520/520/dog' width={520} height={520}/>
        <p style={{color: "#0070f3"}}><Link href="/">Back Home</Link></p>
      </main>
    </div>
  )
}

export default Doggo
