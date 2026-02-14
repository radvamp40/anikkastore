"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  images,
  thumbnail,
}: {
  images: string[];
  thumbnail: string;
}) {
  const [activeImage, setActiveImage] = useState(thumbnail || images[0]);

  return (
    <div className="w-full md:w-1/2">
      <div className="border rounded-xl p-4 mb-4 flex justify-center">
        <Image
          src={activeImage}
          alt="Product"
          width={500}
          height={500}
          className="max-h-96 object-contain"
        />
      </div>

      <div className="flex gap-3 flex-wrap">
        {[thumbnail, ...images].map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`border rounded-lg p-1 ${
              activeImage === img ? "border-black" : "border-gray-300"
            }`}
          >
            <Image
              src={img}
              alt="Thumb"
              className="h-16 w-16 object-contain"
              width={500}
              height={500}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
