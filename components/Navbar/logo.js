import Link from "next/link";
const Logo = () => {
  return (
    // <Link href="/">
    //   <button className="flex flex-col -space-y-1 focus:outline-none font-bold text-xl md:text-2xl">
    //     <span>
    //       M<span className="font-light text-sm md:text-base">ohamad</span>
    //     </span>
    //     <span>Tarhini</span>
    //   </button>
    // </Link>
    <Link href="/">
      <a className="flex flex-col -space-y-2  hover:text-gray-700 dark:hover:text-gray-200">
        <span className="text-lg">Mohamad</span>
        <span className="font-bold text-2xl">
          <span className="text-3xl">T</span>arhini
        </span>
      </a>
    </Link>
  );
};
export default Logo;
