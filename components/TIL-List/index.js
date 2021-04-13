import Heading from "../Common/heading";
import Link from "next/link";
const TILList = ({ tilsData, withShowAllButton }) => {
  const Item = ({ id, content, date, withLine }) => {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "short" });
    return (
      <li
        className="flex flex-col space-y-1 md:flex-row md:space-x-4 md:space-y-0 md:justify-stretch "
        key={id}
      >
        {/* date and line div*/}
        <div className="hidden md:flex flex-col items-center">
          <div className="rounded-full border-4  h-20 w-20  flex flex-col -space-y-1 justify-center items-center font-semibold border-gray-500 bg-gray-200 text-gray-600 dark:border-gray-100 dark:bg-blackish dark:text-gray-100">
            <span className="text-sm">{day}</span>
            <span className="font-bold text-lg">{month}</span>
            <span className="text-sm">{year}</span>
          </div>

          {withLine && (
            <div className="flex-grow w-1 bg-gray-500 dark:bg-gray-200"></div>
          )}
        </div>
        {/* Date on xs size screen */}

        <div className="md:hidden flex space-x-1 border-b-2 border-gray-500  text-gray-600 dark:border-gray-100 dark:text-gray-100 font-semibold items-center justify-start text-sm">
          <span>{day}</span>
          <span>{month}</span>
          <span>{year}</span>
        </div>

        {/* content */}
        <div
          className={`prose dark:prose-dark md:min-h-sm break-words 
          ${withLine ? "pb-10" : ""}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </li>
    );
  };

  const ShowAllButton = () => {
    return (
      <Link href="/til">
        <a className="transition duration-300 ease-in-out rounded-md md:rounded-full border-2 md:border-4 p-2 md:p-0 md:h-20 md:w-20  flex flex-col justify-center items-center font-bold border-gray-500 bg-gray-200 text-gray-600 dark:border-gray-100 dark:bg-black dark:text-gray-100 transform dark:hover:bg-eerie hover:bg-gray-300">
          <span className="hidden md:block">See all</span>
          <span className="md:hidden">See all TIL posts</span>
        </a>
      </Link>
    );
  };

  return (
    <section className="">
      <Heading text="Today I Learned" />
      <ul className="flex flex-col mt-5">
        {tilsData.map((item, index) => {
          return Item({
            id: item.id,
            date: new Date(item.date),
            content: item.contentHtml,
            withLine: withShowAllButton || index !== tilsData.length - 1,
          });
        })}
        {withShowAllButton && ShowAllButton()}
      </ul>
    </section>
  );
};
export default TILList;
