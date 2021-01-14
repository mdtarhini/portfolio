import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const OneExperience = ({ data }) => {
  return (
    <div className="mb-4">
      <a href={data.where.link} className="text-xl font-bold">
        {data.where.label}
      </a>
      <hr className="mb-2" />
      <p>
        <span className="font-bold">{data.what}</span>
        <span className="text-gray-400 text-sm">{` ${data.when.start}-${data.when.end}`}</span>
      </p>
      <p>{data.description}</p>
      <p className="font-bold">Major accomplishments:</p>
      <ul>
        {data.accomplishments.map((acc, index) => {
          return (
            <li key={index} className="list-inside list-disc">
              {acc}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default OneExperience;
