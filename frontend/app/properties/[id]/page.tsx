import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";
import React from "react";

const PropertyDetailsPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          src={"/propertyImg.jpeg"}
          alt="Property 1"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-4 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests · 2 bedrooms · 2 beds · 1 bath
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src={"/awatar.jpg"}
              alt="Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              <strong>John Doe </strong>
              is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi illo
            fugit quos vitae cumque quod labore rem quis! Minima, ipsam libero!
            Pariatur vitae rerum error.
          </p>
        </div>
        <div className="col-span-2">
          <ReservationSidebar />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
