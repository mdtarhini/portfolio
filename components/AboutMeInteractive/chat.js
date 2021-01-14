import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Message from "./message";
import MessageSuggestions from "./message-suggestions";

import ListOfMessages from "./data/list-of-messages";

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState({
    welcome: {
      fromMe: true,
      body: ListOfMessages.welcome.body,
      when: new Date(),
    },
  });
  const [suggestions, setSuggestions] = useState(
    ListOfMessages["welcome"].suggestions.map((suggestionKey) => {
      return { key: suggestionKey, ...ListOfMessages[suggestionKey] };
    })
  );
  const [suggestionsVisible, showSuggestions] = useState(true);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestionClicked = (suggestionKey) => {
    if (suggestionKey === "welcomeNo") {
      onClose();
      return;
    }
    showSuggestions(false);
    setTimeout(() => {
      showSuggestions(true);
      scrollToBottom();
    }, 500);

    const trigerredMessageKey = ListOfMessages[suggestionKey].trigerring;
    const trigerredSuggestions = ListOfMessages[
      trigerredMessageKey
    ].suggestions.map((suggestionKey) => {
      return { key: suggestionKey, ...ListOfMessages[suggestionKey] };
    });

    setMessages({
      ...messages,
      [suggestionKey]: {
        body: ListOfMessages[suggestionKey].body,
        when: new Date(),
        fromMe: false,
      },
      [trigerredMessageKey]: {
        ...ListOfMessages[trigerredMessageKey],
        fromMe: true,
        when: new Date(),
      },
    });

    setSuggestions(trigerredSuggestions);
  };

  const onUndo = (key) => {
    const filteredMessages = Object.keys(messages)
      .filter((msgKey) => messages[msgKey].when < messages[key].when)
      .reduce(
        (res, filteredKey) => ((res[filteredKey] = messages[filteredKey]), res),
        {}
      );
    const lastMessageKey = Object.keys(filteredMessages).sort(
      (a, b) => filteredMessages[b].when - filteredMessages[a].when
    )[0];
    setMessages(filteredMessages);
    setSuggestions(
      ListOfMessages[lastMessageKey].suggestions.map((suggestionKey) => {
        return { key: suggestionKey, ...ListOfMessages[suggestionKey] };
      })
    );
    //retrieve the suggestions (either using the date to get the last, or search for the parent message)
  };
  console.log(messages);
  return (
    <div className="bg-white w-full md:w-1/2 xl:w-1/3 m-2 rounded-lg shadow-lg">
      <div className="w-full flex p-4 justify-center items-center">
        <span className="text-lg text-black">
          A<span className="text-5xl ">bo</span>u
          <span className="text-5xl ">t</span>
          <span> {"  "}me.</span>
        </span>
      </div>
      <div
        id="chat-div"
        className="bg-gray-100 w-full h-80 overflow-auto rounded-b-lg  px-3 py-4 flex flex-col"
      >
        <TransitionGroup component={null}>
          {Object.keys(messages)
            .sort((a, b) => messages[a].when - messages[b].when)
            .map((msgKey) => {
              const message = messages[msgKey];
              return (
                <CSSTransition
                  key={msgKey}
                  timeout={600}
                  classNames={`message-${
                    message.fromMe ? "from-me" : "from-them"
                  }`}
                >
                  <Message
                    key={msgKey}
                    fromMe={message.fromMe}
                    body={message.body}
                    onUndo={() => {
                      onUndo(msgKey);
                    }}
                  />
                </CSSTransition>
              );
            })}
        </TransitionGroup>

        {suggestionsVisible && (
          <MessageSuggestions
            suggestionClicked={suggestionClicked}
            suggestions={suggestions}
          />
        )}

        <div ref={messagesEndRef}></div>
      </div>
    </div>
  );
};
export default Chat;
