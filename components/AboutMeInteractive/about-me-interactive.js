import React, { useState } from "react";
import Chat from "./chat";
const AboutMeInteractive = (props) => {
  const [chatVisibility, setChatVisibility] = useState(true);
  return (
    <div className="w-full bg-gray-200 flex justify-center py-10 shadow-lg">
      {chatVisibility && (
        <Chat
          onClose={() => {
            setChatVisibility(false);
          }}
        />
      )}
    </div>
  );
};
export default AboutMeInteractive;
