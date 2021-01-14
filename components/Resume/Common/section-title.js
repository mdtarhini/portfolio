import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="text-3xl font-bold">
      {props.title}
      <div className="h-2.5 w-24 bg-gradient-to-r from-gray-900 to-white mb-4 dark:from-white dark:to-black"></div>
    </div>
  );
};
export default SectionTitle;
