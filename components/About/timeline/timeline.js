import TimelinePiece from "./timeline-piece";
import { FaBaby, FaCode, FaGlobe } from "react-icons/fa";
import { GiBrightExplosion, GiArchiveResearch } from "react-icons/gi";
const items = [
  {
    colors: { light: "gray-700", dark: "red-500" },
    year: (
      <span className="text-lg">
        ~13.7&#215;10<sup>9</sup> <span className="text-base">years ago</span>
      </span>
    ),
    text: "The Big Bang",
    icon: <GiBrightExplosion />,
  },
  {
    colors: { light: "red-500", dark: "yellow-400" },
    year: "1989",
    text: "The web was born at CERN",
    icon: <FaGlobe />,
  },
  {
    colors: { light: "green-600", dark: "green-600" },
    year: "1991",
    text: "I was born",
    icon: <FaBaby />,
  },
  {
    colors: { light: "blue-500", dark: "blue-400" },
    year: "2017",
    text: "I studied the Big Bang at CERN",
    icon: <GiArchiveResearch />,
  },
  {
    colors: { light: "indigo-600", dark: "indigo-500" },
    year: <span>2021 &#8594;</span>,
    text: "I am a web developper",
    icon: <FaCode />,
  },
];
const Timeline = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:mt-48">
      {items.map((item, index) => {
        return (
          <TimelinePiece
            key={index}
            roundedLeft={index === 0}
            roundedRight={index === items.length - 1}
            reversed={index % 2 !== 0}
            colors={item.colors}
            icon={item.icon}
            year={item.year}
            text={item.text}
          />
        );
      })}
    </div>
  );
};
export default Timeline;
