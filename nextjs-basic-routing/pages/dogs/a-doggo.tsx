import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Doggo: NextPage = ({ dog }) => {
  return (
    <div>
      <main>
        <h1>
          This is a {dog.name}.
        </h1>

        <Image alt="This is a doggo" src={dog.imageURL} width={520} height={520}/>
        
        <p>{dog.description}</p>
      </main>
    </div>
  )
}

export default Doggo
