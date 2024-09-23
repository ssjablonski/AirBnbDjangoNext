"use client";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { getUserId } from "@/app/lib/actions";
import React from "react";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const addPropertyModal = useAddPropertyModal();
  const loginModal = useLoginModal();

  const airbnbYourHome = () => {
    if (!userId) {
      loginModal.open();
    } else {
      addPropertyModal.open();
    }
  };

  return (
    <div
      className="p-2 text-sm font-semibold rounded-full hover:bg-gray-200 cursor-pointer"
      onClick={airbnbYourHome}
    >
      Airbnb your home
    </div>
  );
};

export default AddPropertyButton;
