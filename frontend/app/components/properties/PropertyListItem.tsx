import Image from "next/image";
import React from "react";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={"/propertyImg.jpeg"}
          alt="Property 1"
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-105 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-md font-medium">Property Name</p>
        <p className="text-sm text-gray-500">Hosted by someone</p>
        <p className="text-sm">
          <span className="font-semibold">$340</span> per guest
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
