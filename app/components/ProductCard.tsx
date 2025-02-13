"use client";

import Image from "next/image";
import * as React from "react";
import { useState } from "react";

type ImageDetails = {
  color: string;
  imageUrl: string;
};

type InventoryDetails = {
  color: string;
  //   size: string;
  listPrice: number;
  salePrice: number | null;
  isInStock: boolean;
};

export interface IProductCardProps {
  key: string;
  id: string;
  name: string;
  colors: string[];
  images: ImageDetails[];
  inventory: InventoryDetails[];
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
  id,
  name,
  colors,
  images,
  inventory,
}) => {
  const [selectedColour, setSelectedColour] = useState(colors[0]);
  return (
    <div className="my-8 mx-3">
      <div className="relative w-full h-[225px]">
        <Image
          src={
            images.find((image) => image.color === selectedColour)?.imageUrl ||
            ""
          }
          alt={`${name} in ${selectedColour}`}
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>
      <h4 className="font-normal text-xs text-neutral-600">{selectedColour}</h4>
      <h2 className="font-medium text-lg text-neutral-900">{name}</h2>
      <h3 className="font-normal text-lg text-neutral-500">(price)</h3>
      <div>
        {colors.map((color) => (
          <span key={color}>{color}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
