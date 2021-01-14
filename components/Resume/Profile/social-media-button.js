import React from "react";

const SocialMediaButton = (props) => {
  return (
    <a href={props.href} target="_blank">
      <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 dark:bg-white hover:bg-gray-700 text-white dark:text-black dark:hover:bg-gray-200">
        <span>{props.icon}</span>
        <span className="sr-only">{props.label}</span>
      </button>
    </a>
  );
};
export default SocialMediaButton;
