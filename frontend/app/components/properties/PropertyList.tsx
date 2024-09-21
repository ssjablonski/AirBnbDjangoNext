"use client";
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import axios from "axios";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
};

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    const url = "http://localhost:8000/api/properties/";

    const response = await axios.get(url);
    setProperties(response.data.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return <PropertyListItem key={property.id} property={property} />;
      })}
    </>
  );
};

export default PropertyList;
