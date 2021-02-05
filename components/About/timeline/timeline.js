import TimelinePiece from "./timeline-piece";
import { FaBaby, FaCode, FaGlobe } from "react-icons/fa";
import { GiBrightExplosion, GiArchiveResearch } from "react-icons/gi";
const items = [
  {
    colors: { light: "red-600", dark: "red-500" },
    year: (
      <span className="text-lg">
        ~13.7&#215;10<sup>9</sup> <span className="text-base">years ago</span>
      </span>
    ),
    text: "Big-Bang: the universe was born.",
    icon: <GiBrightExplosion />,
  },
  {
    colors: { light: "yellow-500", dark: "yellow-400" },
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
    text: "I studied the big-bang at CERN",
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
  const nItems = items.length;
  //Accepted length portions in tailwind 1/2, 1/3, /1/4, 1/5,1/6, 1/12
  let mdWidth;
  if ([2, 3, 4, 5, 6, 12].includes(nItems)) {
    mdWidth = `1/${nItems}`;
  } else if (nItems < 12) {
    mdWidth = "1/12";
  } else mdWidth = "24";

  return (
    <div className="w-full flex flex-col md:flex-row md:mt-48">
      {items.map((item, index) => {
        return (
          <TimelinePiece
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
