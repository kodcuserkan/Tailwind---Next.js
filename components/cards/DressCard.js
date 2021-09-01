import React from "react"
import Image from "next/image"
import { toBase64 } from "../../public/utils"
import { shimmer } from "../../public/utils"

const DressCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-pink-500 flex flex-col align-middle justify-center overflow-hidden rounded w-80 mx-2 flex-grow">
      <div className="p-1 h-180 w-100 overflow-hidden">
        <Image
          height="140"
          width="110"
          layout="responsive"
          src={image}
          alt={title}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </div>
      <div className="py-1 px-2 h-40 w-full flex flex-col align-middle justify-center">
        <h3 className="text-white text-center font-extrabold text-2xl font-serif ">
          {title}
        </h3>
        <p className="text-white text-center font-bold text-lg ">
          {description}
        </p>
        <p className="text-white text-center font-bold text-lg ">${price}</p>
      </div>
    </div>
  )
}

export default DressCard
