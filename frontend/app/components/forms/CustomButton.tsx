import React from "react";

interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const CustomButton = ({ label, onClick, className }: CustomButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb hover:bg-airbnbDark text-white rounded-xl transition cursor-pointer text-center ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
