const ListOfMessages = {
  welcome: {
    body:
      "Hi, thanks for visiting ! Instead of showing you a paragraph about myself, why don’t we make it a bit more interactive ?",
    suggestions: ["welcomeYes", "welcomeNo"],
  },
  welcomeYes: {
    body: "Yes, let’s start!",
    trigerring: "aboutMe",
  },
  welcomeNo: {
    body: "No thanks, I prefer a paragraph",
  },
  aboutMe: {
    body:
      "Ok cool! I am originally a physicist but I recently found a passion for web development and I would love to continue working on it.",
    suggestions: ["whatPhysicsQ", "whenWebQ"],
  },
  whatPhysicsQ: {
    body: "What domain of phsyics did you study?",
    trigerring: "whatPhysicsA",
  },
  whatPhysicsA: {
    body: "I have a PhD in particle physics ",
    suggestions: ["whatPartcilePhysicsQ", "whenWebQ"],
  },
  whatPartcilePhysicsQ: {
    body: "What is particle physics?",
    trigerring: "whatPartcilePhysicsA",
  },
  whatPartcilePhysicsA: {
    body:
      "Particle physics is the study of fundemental particles. There are ....",
    suggestions: ["whereWorkQ", "whenWebQ"],
  },
  whenWebQ: {
    body: "when did you start learning web development ?",
    trigerring: "whenWebA",
  },
  whenWebA: {
    body: "this was in mid-2020",
    suggestions: [],
  },
};

export const getSuggestions = (suggestionKey) => {
  return ListOfMessages[suggestionKey].suggestions.map((suggestionKey) => {
    return { key: suggestionKey, ...ListOfMessages[suggestionKey] };
  });
};
export default ListOfMessages;
