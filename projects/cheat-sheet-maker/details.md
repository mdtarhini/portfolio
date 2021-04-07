---
title: "Cheat sheet maker"
index: 1
description: "A fullstack application to create and share tabulated cheat sheets using markdown"
tags:
  [
    "react",
    "markdown",
    "react-router",
    "redux",
    "node-js",
    "REST api",
    "mongo-db",
    "jwt",
    "tailwind",
  ]
thumbnail: "/projects/table.svg"
thumbnailAlt: "A thumbnail displaying a table"
screenshot: "/projects/cheat-sheet.png"
website: "https://cheatsheet-maker.herokuapp.com/"
github: "https://github.com/mdtarhini/cheat-sheet-maker"
---

## Motivation

I have always found the notion of cheat sheets to be powerful for quick learning, and I used them extensively since high school. So with this project I wanted to build a tool to generate them where the user only takes care of the content without worrying about the style.

## Features

- Easy to use UI for making and editing sheets using markdown
- Syntax highlighting with support for various languages
- Authentication to let users save progress

## Mainly used technologies:

- In this project, my goal was not to learn new things, but rather to build something useful. Consequently, I chose technologies that I already worked with.
- On the front-end, I used **react** with **redux** and **Tailwind-CSS** for styling.
  -For markdown parsing, I used **[react-markdown](https://github.com/remarkjs/react-markdown)**, coupled with **[react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)** for syntax highlighting.
- The back-end is built with **node-JS** and **express-JS**. It is basically a REST api with **Mongo-DB** as a database.

## What can be improved ?

- Markdown is very powerful but it might not be the best choice for everyone. It would be nice if I added a rich text editor as an alternative.
- Currently, users are required to sign up in order to create a sheet. I made this choice so users can save their progress. I plan to add the ability to export the sheet in pdf format so users can create sheets and save them without the need for authentication.
