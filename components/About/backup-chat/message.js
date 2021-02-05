import { FaUndo } from "react-icons/fa";
const Message = ({ fromMe, body, onUndo }) => {
  return (
    <div
      className={`relative mb-2  w-4/5 max-w-xl flex ${
        fromMe ? "self-start" : "self-end justify-end"
      }`}
    >
      {fromMe && (
        <img
          className="w-8 h-8  rounded-full mr-2 border-2 border-gray-800"
          src="/profile.jpg"
          alt="profile image in chat"
        />
      )}

      <div
        className={`${
          fromMe
            ? "bg-white text-black dark:bg-gray-800 dark:text-white"
            : "bg-blue-300 text:blue-700 dark:bg-blue-700 dark:text-blue-100"
        } p-2 rounded-md text-md`}
      >
        {body}
      </div>
      {!fromMe && (
        <button
          className="absolute -bottom-6 right-0 text-sm p-1 rounded-full bg-blue-100  text-blue-700 hover:bg-red-500 hover:text-white cursor-pointer"
          onClick={onUndo}
        >
          <FaUndo />
        </button>
      )}
    </div>
  );
};
export default Message;
