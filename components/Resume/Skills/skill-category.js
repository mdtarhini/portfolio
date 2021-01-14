import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const SkillCategory = ({ title, items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderExtraInfo = () => {
    const extraInfo = items[selectedItem].extra;
    if (extraInfo) {
      return (
        <ul className="mt-2">
          {Object.keys(extraInfo).map((infoKey) => {
            return (
              <li key={infoKey}>
                <span className="font-bold mr-1">{`${infoKey}:`}</span>
                <span>{extraInfo[infoKey]}</span>
              </li>
            );
          })}
        </ul>
      );
    }
  };
  return (
    <div className="mb-4">
      <p className="text-xl font-bold">{title}</p>
      <hr className="mb-2" />
      <div className="flex flex-wrap">
        {Object.keys(items).map((itemKey) => {
          const item = items[itemKey];
          return (
            <div
              key={itemKey}
              className={`mr-2 mb-2 py-1 rounded text-white relative shadow-md ${
                item.extra ? "cursor-pointer px-8" : "px-4"
              } ${
                selectedItem
                  ? selectedItem === itemKey
                    ? "bg-gray-900 font-bold"
                    : "bg-gray-100"
                  : "bg-blue-400"
              }`}
              onClick={() => {
                if (item.extra) {
                  if (itemKey === selectedItem) {
                    setSelectedItem(null);
                  } else {
                    setSelectedItem(itemKey);
                  }
                }
              }}
            >
              {item.label}
              {item.extra && (
                <div
                  className={`absolute right-0 top-0 w-6 h-full flex items-center justify-center rounded-r`}
                >
                  {selectedItem === itemKey ? <FaCaretUp /> : <FaCaretDown />}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {selectedItem && renderExtraInfo()}
    </div>
  );
};
export default SkillCategory;
