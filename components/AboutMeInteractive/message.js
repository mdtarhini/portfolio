import React from "react";
import { FaUndo } from "react-icons/fa";
const Message = ({ fromMe, body, onUndo }) => {
  return (
    <div
      className={`relative mb-2  w-4/5 flex ${
        fromMe ? "self-start" : "self-end justify-end"
      }`}
    >
      {fromMe && (
        <img
          className="object-fill w-8 h-8  rounded-full mr-2"
          src="/profile.jpg"
          alt="profile image in chat"
        />
      )}

      <div
        className={`${
          fromMe ? "bg-white text-black" : "bg-blue-300 text-blue-700"
        } p-2 rounded-md text-md`}
      >
        {body}
      </div>
      {!fromMe && (
        <div
          className="absolute -bottom-6 right-0 text-sm p-1 rounded-full bg-blue-300 text-blue-700 hover:bg-red-500 hover:text-white cursor-pointer"
          onClick={onUndo}
        >
          <FaUndo />
        </div>
      )}
    </div>
  );
};
export default Message;
