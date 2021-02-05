import { BiRadioCircle } from "react-icons/bi";
const MessageSuggestions = ({ suggestions, suggestionClicked }) => {
  return (
    <div className="self-end mt-6  max-w-4/5 shadow-lg">
      <div className="flex flex-col justify-end">
        {suggestions.map((suggestion, index) => {
          return (
            <div
              onClick={() => {
                suggestionClicked(suggestion.key);
              }}
              key={suggestion.key}
              className={`flex items-center px-3 py-2 cursor-pointer bg-gray-300 text-black hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 ${
                index !== suggestions.length - 1
                  ? "border-b border-gray-100 dark:border-black"
                  : ""
              } ${
                index === 0
                  ? "rounded-t-md"
                  : index === suggestions.length - 1
                  ? "rounded-b-md"
                  : ""
              }`}
            >
              <span className="text-2xl">
                <BiRadioCircle />
              </span>
              {suggestion.body}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MessageSuggestions;
