import React from "react";

const OneAward = ({ data }) => {
  return (
    <div className="mb-4">
      <a href={data.what.link} className="text-lg font-bold">
        {data.what.label}
      </a>
      <hr className="mb-2" />
      <p>
        <span className="text-gray-400 text-sm">{`${data.when}`}</span>
      </p>
      <p>{data.description}</p>
    </div>
  );
};
export default OneAward;
