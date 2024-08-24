import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserNav = () => {
  return (
    <div className="p-3 relative inline-block border rounded-full">
      <button className="flex items-center gap-5 *:h-5">
        <FontAwesomeIcon className="h-5" icon={faBars} />
        <FontAwesomeIcon className="h-5" icon={faUser} />
      </button>
    </div>
  );
};

export default UserNav;
