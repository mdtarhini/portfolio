import NavCards from "./nav-cards";
import ThemeSwitcher from "../Navbar/theme-switcher";
import SocialIcons from "../Footer/SocialIcons";
const Home = ({ heading, subHeading, image, children }) => {
  return (
    <div className="w-full text-gray-900 dark:text-white">
      <div className="w-full min-h-screen  ">
        <header className="w-full h-48 md:h-60 lg:h-80 bg-gray-200 dark:bg-black flex flex-col justify-end items-center md:items-start  px-3 py-4 md:px-6 md:py-8 relative">
          <div className="absolute top-0 left-0 w-full flex items-center justify-between px-2 md:px-6 py-2">
            <SocialIcons />
            <ThemeSwitcher />
          </div>
          {image}
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold align-text-bottom">
            {heading}
          </h1>
        </header>

        <main className="w-full md:max-w-xl lg:max-w-3xl flex flex-col justify-center space-y-5 md:space-y-10 px-3 py-4 md:px-6 md:py-8">
          <div
            className={`w-full relative md:text-lg lg:text-xl lg:leading-loose break-words text-justify`}
          >
            {subHeading}
          </div>
          <NavCards />
        </main>
      </div>
      <div className="w-full md:max-w-xl lg:max-w-3xl px-3 md:px-6 mt-6">
        {children}
      </div>
    </div>
  );
};
export default Home;
