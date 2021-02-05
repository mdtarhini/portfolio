import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <button className="flex flex-col -space-y-1 font-roboto-mono focus:outline-none font-bold text-xl md:text-2xl">
        <span>
          M<span className="font-light">ohamad</span>
        </span>
        <span>Tarhini</span>
      </button>
    </Link>
  );
};
export default Logo;
