import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import NavItem from "../components/Resume/Common/nav-item";
import { ImLab } from "react-icons/im";
import {
  FaAward,
  FaFileDownload,
  FaBriefcase,
  FaTools,
  FaUser,
} from "react-icons/fa";
import Awards from "../components/Resume/Awards/Awards";
import Education from "../components/Resume/Education/Education";
import Experiences from "../components/Resume/Experiences/Experiences";
import Profile from "../components/Resume/Profile/Profile";
import Skills from "../components/Resume/Skills/Skills";
import { useTheme } from "next-themes";

const sections = [
  {
    id: "resume-profile",
    label: "About me",
    title: "Personal Information",
    icon: <FaUser />,
    content: <Profile />,
  },
  {
    id: "resume-skills",
    label: "Skills",
    title: "Skills",
    icon: <FaTools />,
    content: <Skills />,
  },
  {
    id: "resume-experiences",
    label: "Experiences",
    title: "Experiences",
    icon: <ImLab />,
    content: <Experiences />,
  },
  {
    id: "resume-education",
    label: "Education",
    title: "Education",
    icon: <FaBriefcase />,
    content: <Education />,
  },
  {
    id: "resume-awards",
    label: "Awards",
    title: "Awards",
    icon: <FaAward />,
    content: <Awards />,
  },
];
const Resume = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [currentSection, setCurrentSection] = useState("resume-profile");
  return (
    <main className="flex justify-center w-screen bg-gray-100 dark:bg-gray-800 py-10 px-3">
      <section
        id="resume"
        className="w-full max-w-5xl bg-white dark:bg-black text-black dark:text-white shadow-md relative"
      >
        <Scrollspy
          offset={-400}
          items={sections.map((section) => section.id)}
          currentClassName="is-current"
          onUpdate={(item) => {
            if (item) {
              setCurrentSection(item.id);
            }
          }}
        ></Scrollspy>
        <header
          id="resume-nav"
          className="sticky top-0 left-0 z-10 w-full h-12 flex items-center justify-between text-gray-300 bg-gray-900 border-b border-gray-600"
        >
          <div className="flex h-full items-center">
            {sections.map((section) => {
              return (
                <NavItem
                  href={`#${section.id}`}
                  key={section.id}
                  label={section.label}
                  active={currentSection === section.id}
                  icon={section.icon}
                />
              );
            })}
          </div>
          <div className="px-3">
            <button
              className="w-8 h-8 rounded-full hover:bg-gray-700 flex items-center justify-center"
              onClick={toggleTheme}
            >
              <FaFileDownload />
              <span className="sr-only">Download as PDF</span>
            </button>
          </div>
        </header>

        <section id="resume-sections" className="pb-10 px-3 md:px-6 lg:px-12 ">
          {sections.map((section) => {
            return (
              <section
                id={section.id}
                key={section.id}
                className="w-full pt-16"
              >
                {React.cloneElement(section.content, { title: section.title })}
              </section>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Resume;
