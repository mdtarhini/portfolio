import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <button className="flex flex-col -space-y-1 font-lemonada focus:outline-none font-bold text-xl md:text-2xl">
        <span>
          M<span className="font-light text-sm md:text-base">ohamad</span>
        </span>
        <span>Tarhini</span>
      </button>
    </Link>
  );
};
export default Logo;
