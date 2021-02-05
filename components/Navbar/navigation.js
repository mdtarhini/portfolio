import { useRouter } from "next/router";
import Link from "next/link";
import {
  HiOutlineHome,
  HiCode,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
const elements = [
  { label: "Home", icon: <HiOutlineHome />, href: "/" },
  { label: "About", icon: <HiOutlineInformationCircle />, href: "/about" },
  { label: "Projects", icon: <HiCode />, href: "/projects" },
  { label: "Resume", icon: <RiPagesLine />, href: "/resume" },
];
const Navigation = ({ toggleDrawer }) => {
  const getBasePathName = (str) => {
    return str.indexOf("/", 1) === -1 ? str : str.slice(0, str.indexOf("/", 1));
  };
  const router = useRouter();
  return (
    <nav className="flex flex-col space-y-6 md:flex-row md:items-center md:space-y-0 py-10 md:py-0 lg:text-lg font-montserrat font-semibold">
      {elements.map((element) => {
        return (
          <Link href={element.href} key={element.href}>
            <a
              className={`relative flex md:flex-col items-end mr-0 md:mr-4 p-3 md:p-0 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 ${
                element.href === router.pathname
                  ? "bg-gray-600 bg-opacity-40 md:bg-opacity-0"
                  : ""
              }`}
              onClick={toggleDrawer ? toggleDrawer : null}
            >
              <span className="text-3xl mr-2 md:hidden">{element.icon}</span>
              {element.label}
              <div
                className={`absolute -bottom-1 bg-gradient-to-r from-gray-900 dark:from-white to-gray-200 dark:to-black left-0 hidden ${
                  getBasePathName(router.pathname) === element.href
                    ? "md:block"
                    : "md:hidden"
                } w-full h-0.5 bg-yellow-50`}
              ></div>
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
export default Navigation;
