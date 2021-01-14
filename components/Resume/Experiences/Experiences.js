import React from "react";
import experiences from "./experiences.json";
import SectionTitle from "../Common/section-title";
import OneExperience from "./one-experience";
const Experiences = ({ title }) => {
  return (
    <div>
      <SectionTitle title={title} />

      {experiences.map((exp, index) => {
        return <OneExperience key={index} data={exp} />;
      })}
    </div>
  );
};

export default Experiences;
