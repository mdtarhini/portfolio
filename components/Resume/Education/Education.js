import React from "react";
import educations from "./education.json";
import certifications from "./certifications.json";
import SectionTitle from "../Common/section-title";
import OneEducation from "./one-education";
import OneCertification from "./one-certification";
const Education = ({ title }) => {
  return (
    <div>
      <SectionTitle title={title} />
      {educations.map((edu, index) => {
        return <OneEducation key={index} data={edu} />;
      })}
      <section className="w-full mt-12">
        <SectionTitle title="Certifications" />
        {certifications.map((cert, index) => {
          return <OneCertification key={index} data={cert} />;
        })}
      </section>
    </div>
  );
};

export default Education;
