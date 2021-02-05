const TimelinePiece = ({
  roundedLeft,
  roundedRight,
  colors,
  reversed,
  text,
  icon,
  year,
  mdWidth,
}) => {
  return (
    <div
      className={`w-full md:w-${mdWidth} flex flex-row${
        reversed ? "-reverse" : ""
      } md:flex-col${
        reversed ? "-reverse" : ""
      } items-center justify-center relative`}
    >
      {/* The circle and line */}
      <div
        className={`flex flex-row${reversed ? "-reverse" : ""} md:flex-col${
          reversed ? "-reverse" : ""
        } items-center md:absolute ${reversed ? "top-0" : "bottom-0"}`}
      >
        <div
          className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-${colors.light} dark:border-${colors.dark} bg-${colors.light} dark:bg-black bg-opacity-30 dark:bg-opacity-100 flex items-center justify-center text-2xl md:text-4xl text-${colors.light} dark:text-${colors.dark}`}
        >
          {icon}
        </div>
        <div
          className={`w-12 h-0.5 md:w-0.5 md:h-20 bg-${colors.light} dark:bg-${colors.dark}`}
        ></div>
      </div>
      {/* The main line */}
      <div
        className={`flex flex-col w-4 md:w-full h-32 md:h-4 ${
          roundedLeft
            ? "rounded-t-full md:rounded-l-full md:rounded-t-none"
            : roundedRight
            ? "rounded-b-full md:rounded-r-full md:rounded-b-none"
            : ""
        } bg-${colors.light} dark:bg-${colors.dark} `}
      ></div>
      {/* The text */}
      <div
        className={`w-28 md:w-full flex flex-col items-center md:absolute ${
          reversed ? "bottom-6" : "top-6"
        }`}
      >
        <h5
          className={`leading-none font-bold text-2xl text-center text-${colors.light} dark:text-${colors.dark}`}
        >
          {year}
        </h5>
        <hr />
        <i className="text-base text-center px-2">{text}</i>
      </div>
    </div>
  );
};
export default TimelinePiece;
