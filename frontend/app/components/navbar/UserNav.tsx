"use client";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MenuLink from "./MenuLink";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-3 relative inline-block border rounded-full">
      <button
        className="flex items-center gap-5 *:h-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faUser} />
      </button>

      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
          <MenuLink label="Log in" onClick={() => console.log("clik")} />
          <MenuLink label="Sign up" onClick={() => console.log("clik")} />
        </div>
      )}
    </div>
  );
};

export default UserNav;
