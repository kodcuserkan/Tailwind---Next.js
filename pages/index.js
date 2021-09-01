import Head from "next/head"
import Button from "../components/buttons"
import DressCard from "../components/cards/DressCard"

export default function Home() {
  const buttonClickFunc = () => {
    console.log("Clicked")
  }
  return (
    <div className="bg-gray-100 min-w-full min-h-screen flex p-4 m-0">
      <Head>
        <title>Tailwind-Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container bg-gray-200 min-w-full">
        <div className="p-4">
          <h1 className="text-4xl p-4 text-center font-extrabold">Dress Store</h1>
          <Button clickFunc={buttonClickFunc}>Add to Cart</Button>
        </div>
        <div className="flex flex-row  flex-wrap">
          <DressCard
            title="Great Dress"
            image="/1.webp"
            description="You should buy it"
            price="44"
          />
          <DressCard
            title="Bad Dress"
            image="/1.webp"
            description="Nooo dont buy it"
            price="222"
          />
        </div>
      </div>
    </div>
  )
}
