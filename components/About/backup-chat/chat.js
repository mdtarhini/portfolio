import { useState, useRef, useEffect } from "react";
import { BsBoxArrowRight } from "react-icons/bs";
import { VscHubot } from "react-icons/vsc";
import Message from "./message";
import MessageSuggestions from "./message-suggestions";
import ListOfMessages, { getSuggestions } from "./data/list-of-messages";

//Need this one for the chat background image (not using tailwind)
import { useTheme } from "next-themes";

const Chat = () => {
  const { theme } = useTheme();

  //-------------------------------------------------------------------------//
  // States
  const [chatVisibility, setChatVisibility] = useState(false);
  const [messages, setMessages] = useState({
    welcome: {
      fromMe: true,
      body: ListOfMessages.welcome.body,
    },
  });
  //These refs will be used in order to save the messages in localStorage only once on unmount
  const messagesStateRef = useRef();
  const [suggestions, setSuggestions] = useState(getSuggestions("welcome"));

  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  //Store the state to the local storage on unmounting
  //Use the refs in useeffect; like this we don't need to store in local storage on each render
  useEffect(() => {
    messagesStateRef.current = messages;
  }, [messages]);

  const saveStateToLocalStorage = () => {
    localStorage.setItem(
      "mdtarhini-about-chat",
      JSON.stringify(Object.keys(messagesStateRef.current))
    );
  };
  useEffect(() => {
    return () => {
      saveStateToLocalStorage();
    };
  }, []);
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  //Read (if there) the state from the local-storage when mounting:
  const getMessagesFromLocalStorage = () => {
    if (localStorage.hasOwnProperty("mdtarhini-about-chat")) {
      // get the key's value from localStorage
      let messagesValue = localStorage.getItem("mdtarhini-about-chat");

      // parse the localStorage string and setState
      try {
        let parsedMessagesKeys = JSON.parse(messagesValue);
        setMessages(
          parsedMessagesKeys.reduce((obj, key, index) => {
            return {
              ...obj,
              [key]: {
                body: ListOfMessages[key].body,
                fromMe: index % 2 === 0,
              },
            };
          }, {})
        );
        //No need to store the suggestions, just take the ones of the last message
        const lastMessageKey =
          parsedMessagesKeys[parsedMessagesKeys.length - 1];
        setSuggestions(getSuggestions(lastMessageKey));
      } catch (e) {
        // just leave the state be
      }
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", saveStateToLocalStorage);
    getMessagesFromLocalStorage();
  }, []);
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  //Scrolling to bottom on message added to the stack
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView(false, {
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  //The main functionality (when a suggestion clicked), do the following:
  const suggestionClicked = (suggestionKey) => {
    scrollToBottom();

    const trigerredMessageKey = ListOfMessages[suggestionKey].trigerring;
    const trigerredSuggestions = getSuggestions(trigerredMessageKey);

    setMessages({
      ...messages,
      [suggestionKey]: {
        body: ListOfMessages[suggestionKey].body,

        fromMe: false,
      },
      [trigerredMessageKey]: {
        ...ListOfMessages[trigerredMessageKey],
        fromMe: true,
      },
    });

    setSuggestions(trigerredSuggestions);
  };
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  //Remove the messages below the one which was undone
  const onUndo = (msgIndex) => {
    const filteredMessages = Object.keys(messages)
      .filter((msgKey, index) => index < msgIndex)
      .reduce(
        (res, filteredKey) => ((res[filteredKey] = messages[filteredKey]), res),
        {}
      );
    const filteredKeys = Object.keys(filteredMessages);
    const lastMessageKey = filteredKeys[filteredKeys.length - 1];
    setMessages(filteredMessages);
    setSuggestions(getSuggestions(lastMessageKey));
    //retrieve the suggestions (either using the date to get the last, or search for the parent message)
  };
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  // UI
  return (
    <div
      className={`transform w-full p-4 md:w-1/2 xl:w-1/3 fixed z-10 right-0 bottom-0 ease-in-out transition-all duration-300 translate-x-${
        chatVisibility ? "0" : "full"
      }`}
    >
      {!chatVisibility && (
        <button
          className="absolute -left-14 bottom-14 md:top-14 w-12 h-12 bg-black rounded-full border-2 border-white text-4xl text-white flex items-center justify-center"
          onClick={() => setChatVisibility(true)}
        >
          <VscHubot />
          <span className="sr-only">Open chat bot</span>
        </button>
      )}
      <div className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white flex p-4 justify-between items-center rounded-t-md">
        <span className="text-lg ">
          A<span className="text-5xl ">bo</span>u
          <span className="text-5xl ">t</span>
          <span> {"  "}me.</span>
        </span>
        <button
          className=" text-3xl hover:bg-gray-400 dark:hover:bg-gray-600 px-2 rounded-md"
          onClick={() => {
            setChatVisibility(false);
          }}
        >
          <span className="sr-only">Close chat bot</span>
          <BsBoxArrowRight />
        </button>
      </div>
      <div
        id="chat-div"
        className="bg-gray-100 dark:bg-blackish w-full h-96 overflow-auto rounded-b-md  px-3 py-4 flex flex-col text-base"
        style={{
          backgroundImage: `url(/chat-bg-${theme}.svg)`,
        }}
      >
        {Object.keys(messages).map((msgKey, msgIndex) => {
          const message = messages[msgKey];
          return (
            <Message
              key={msgKey}
              fromMe={message.fromMe}
              body={message.body}
              onUndo={() => {
                onUndo(msgIndex);
              }}
            />
          );
        })}

        <MessageSuggestions
          suggestionClicked={suggestionClicked}
          suggestions={suggestions}
        />

        <div className="mt-5" ref={messagesEndRef}></div>
      </div>
    </div>
  );
};
export default Chat;
