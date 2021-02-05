import { useTheme } from "next-themes";
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      className="cursor-pointer rounded-full p-1 hover:bg-gray-400 "
      onClick={toggleTheme}
    >
      <span className="sr-only">Theme toggler</span>
      <img
        className="w-8 h-8"
        src={`${
          theme === "light" ? "/theme/lamp-on.svg" : "/theme/lamp-off.svg"
        }`}
      />
    </button>
  );
};
export default ThemeToggler;
