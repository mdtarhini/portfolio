import React from "react";
import skills from "./skills.json";
import SectionTitle from "../Common/section-title";
import SkillCategory from "./skill-category";
const Skills = ({ title }) => {
  return (
    <div>
      <SectionTitle title={title} />
      {Object.keys(skills).map((skillKey) => {
        const skill = skills[skillKey];
        return (
          <SkillCategory
            title={skill.title}
            items={skill.items}
            key={skillKey}
          />
        );
      })}
    </div>
  );
};

export default Skills;
