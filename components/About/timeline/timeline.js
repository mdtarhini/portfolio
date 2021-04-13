import TimelinePiece from "./timeline-piece";
import {
  FaBaby,
  FaGlobe,
  FaAtom,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
const items = [
  {
    colors: { light: "gray-700", dark: "red-500" },
    year: "1991",
    text: "I'm Mohamad Tarhini",

    icon: <FaBaby />,
  },
  {
    colors: { light: "blue-500", dark: "blue-400" },
    year: "2009",
    text: "I'm also a physicist",
    icon: <FaGraduationCap />,
  },
  {
    colors: { light: "indigo-600", dark: "indigo-500" },
    year: "2014",
    text: "I'm also a particle physicist",
    icon: <BiAtom />,
  },
  {
    colors: { light: "green-600", dark: "green-600" },
    year: "2017",
    text: "I'm a also a data analyst",
    icon: <FaChartLine />,
  },
  {
    colors: { light: "red-500", dark: "yellow-400" },
    year: "2020",
    text: "I'm also a web developper",
    icon: <FaGlobe />,
  },
];
const Timeline = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:mt-40">
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
