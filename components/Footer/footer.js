import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className=" w-full mt-20 flex flex-col space-y-3 md:flex-row justify-center md:justify-between items-center text-gray-600 dark:text-gray-400">
      <p className="text-sm text-center">
        <span>
          <span className="sr-only">copyright</span>&#169;
        </span>
        2021 Mohamad Tarhini.
      </p>

      <SocialIcons />
    </div>
  );
};

export default Footer;
