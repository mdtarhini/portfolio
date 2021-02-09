---
title: "macOS app clones"
index: 1
description: "A collection of fullstack applications inspired by macOS using React and node-JS"
tags:
  [
    "react",
    "react-router",
    "redux",
    "node-js",
    "REST api",
    "mongo-db",
    "jwt",
    "ant-design",
  ]
thumbnail: "/projects/reactMac.svg"
thumbnailAlt: "A thumbnail displaying apple logo inside a react-JS logo"
screenshot: "/projects/macos.png"
website: "https://macos-react.herokuapp.com/"
github: "https://github.com/mdtarhini/MacOsReact"
---

## Motivation

I made these apps while learning react-JS and node-JS. At the beginning, I was making them separately (one after another) and focusing on a particular concept with each one. I merged them at the end into one project.
Since I didn’t make the different parts of this project at the same time (in terms of my skills), some of them may seem less 'complete/optimized' than others.

## Applications

- Dictionary: it displays the definition and synonyms for a given word. The user can search for words in three languages (English, French, and Spanish)
- Stocks: It shows the evolution of some stocks in over a period of time (yearly, monthly and daily)
- Notes: Authenticated users can write notes in a rich text editor and save them
- Reminders: well, another react to-do app 😜
- Messages: A simple one-to-one chat application
- Dashboard: A set of draggable widgets (calculator, unit converter, clock, calendar, weather, and a puzzle)

## Mainly used technologies:

- As mentioned earlier, the major goal behind building this project was to practice **React** intensively. At the time of building it, I didn’t know about React hooks, so I used stateful **class components** when needed. Routing was handled with **react-router**. For global state management, I used **redux**.
- This was the first complete project I made with **node-JS**. I used it to manage the back-end alongside express-JS. I semi-implemented my own authentication logic, relying on **json-web-token** and **bycript**. As a database, I used **Mongo-db**.
- For the messaging app, **socket.io** was used.
- The goal was not to do pixel perfect clones, so instead of using vanilla-css, I used **ant-design** as a css framework so I could focus on the other aspects.

## What can be improved ?

- This project can benefit heavily from component reusability, which is not very exploited.
- I did not pay close attention to responsive design at the beginning, so some pages may look strange on small devices.
