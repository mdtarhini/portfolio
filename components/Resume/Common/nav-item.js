import React from "react";

const NavItem = (props) => {
  return (
    <a
      href={props.href}
      className={`flex px-4 md:space-x-2 h-full items-center border-r border-gray-300 font-bold ${
        props.active ? "bg-gray-700" : ""
      }`}
    >
      <span>
        {props.icon}
        <span className="sr-only">{props.label}</span>
      </span>
      <p className="hidden md:block">{props.label}</p>
    </a>
  );
};
export default NavItem;
