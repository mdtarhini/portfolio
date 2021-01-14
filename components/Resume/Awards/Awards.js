import React from "react";
import awards from "./awards.json";
import SectionTitle from "../Common/section-title";
import OneAward from "./one-award";
const Awards = ({ title }) => {
  return (
    <div>
      <SectionTitle title={title} />
      {awards.map((award, index) => {
        return <OneAward key={index} data={award} />;
      })}
    </div>
  );
};

export default Awards;
