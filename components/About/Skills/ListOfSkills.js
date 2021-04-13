import { CgWebsite } from "react-icons/cg";
import { BsGraphUp } from "react-icons/bs";

const skills = {
  web: {
    label: "Web sevelopment",
    icon: <CgWebsite />,
    items: {
      html: {
        label: "HTML5",
        icon: "/skills/icons8-html-5.svg",
        year: 2019,
        mood: "🙂",
        about:
          "Many people don’t want to remember their 2020; for me HTML happened in 2020 and for that I am grateful. I need to work on making my code more semantic and keeping accessibility in mind.",
      },
      css: {
        label: "CSS3",
        icon: "/skills/icons8-css3.svg",
        year: 2019,
        mood: "🤔",
        about:
          "I enjoy it despite my limited design skills. I don’t subscribe to one solution in particular; depending on what I am doing, I use vanilla-CSS or tailwind-CSS. In some react projects I made, I used ant-design as a CSS framework.",
      },
      js: {
        label: "Java-Script",
        icon: "/skills/icons8-javascript.svg",
        year: 2019,
        mood: "🤩",
        about:
          "Ever since I started learning it, hardly any day passes without using it or learning something new. I might learn Typescript soon to see if it lives up to the hype.",
      },
      react: {
        label: "React-JS",
        icon: "/skills/icons8-react.svg",
        year: 2020,
        mood: "🤩",
        about:
          "It becomes an essential component of my technology stack, I build most of my front-end projects using it. I also use redux for state management in some projects alongside react. When possible, I want to check out React-native.",
      },
      next: {
        label: "Next.js",
        icon: "/skills/next-js-logo.svg",
        year: 2020,
        mood: "🙂",
        about:
          " I built the first version of this website using create-react-app. I wanted later to make the website faster by using a static site generator. I tried Gatsby and Next.js and went finally with the latter. I haven’t had the opportunity yet to try server-side-rendering with Next.js.",
      },
      tailwind: {
        label: "Tailwind-CSS",
        icon: "/skills/tailwindcss-icon.svg",
        year: 2020,
        mood: "😆",
        about: " I used it to style this website.",
      },
      d3: {
        label: "D3-JS",
        icon: "/skills/d3.svg",
        year: 2020,
        mood: "😮",
        about:
          "As a data analyst, data visualisation is essential to me. I found D3 to be very powerful compared to what I used before. I didn’t practice too much so far, but I will be glad to use it when needed.",
      },

      node: {
        label: "Node-JS",
        icon: "/skills/icons8-nodejs.svg",
        year: 2020,
        mood: "🙂",
        about:
          "After becoming familiar with JavaScript, it was relatively easy for me to lean node-JS. I am not as skilled with it as with the front-end technologies on this list, but I was comfortable enough to use it alongside express-JS and mongo-db as a back-end solution for some of my projects.",
      },
      firebase: {
        label: "Firebase",
        icon: "/skills/icons8-firebase.svg",
        year: 2020,
        mood: "😌",
        about:
          "I appreciate it for making my life simpler when implementing back-end solutions in some of my projects.",
      },
    },
  },
  data: {
    label: "Data analysis/science",
    icon: <BsGraphUp />,
    items: {
      python: {
        label: "Python",
        icon: "/skills/icons8-python.svg",
        year: 2017,
        mood: "🤓",
        about:
          " I used python sometimes during my PhD. Later in 2018, I started using it more while practicing machine learning. I did not use it that much outside the scope of data analysis/science. I might consider using it for back-end web development.",
      },
      pd: {
        label: "Pandas",
        icon: "/skills/Pandas_logo.svg",
        year: 2018,
        mood: "🤩",
        about:
          "Basically, ‘import pandas as pd’ is there pretty much all the time when I use python.",
      },
      sklearn: {
        label: "Sickit-learn",
        icon: "/skills/Scikit_learn_logo_small.svg",
        year: 2019,
        mood: "😀",
        about:
          "The library I used the most for machine learning. Very helpful.",
      },
      tensorflow: {
        label: "Tensorflow",
        icon: "/skills/tensorflow-icon.svg",
        year: 2020,
        mood: "🙂",
        about:
          "Although my Tensorflow skills are relatively limited, I kept it in the list as I will surely go back and work more on it.",
      },
      postgresql: {
        label: "PostgreSQL",
        icon: "/skills/icons8-postgresql.svg",
        year: 2018,
        mood: "🤔",
        about:
          "Although I haven't made large SQL projects, I believe I am comfortable working on it when needed.",
      },

      matlab: {
        label: "Matlab",
        icon: "/skills/icons8-matlab.svg",
        year: 2016,
        mood: "🙂",
        about: "",
      },

      root: {
        label: "Root-Cern",
        icon: "/skills/root-logo.png",
        year: 2014,
        mood: "🙂",
        about: "This C++ framework got me a PhD.",
      },
    },
  },
};

export default skills;
