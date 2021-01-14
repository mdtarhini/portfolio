import React from "react";

const InfoItem = (props) => {
  return (
    <div className="mb-4">
      <p className="text-xl font-bold">{props.title}</p>
      <hr className="mb-2" />
      {props.content}
    </div>
  );
};
export default InfoItem;
