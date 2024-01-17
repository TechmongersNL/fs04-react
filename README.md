# Getting Started with Create React App

This project was created with [Create React App](https://github.com/facebook/create-react-app)

## Setup

- Git clone this repo
- Run `npm install` to install all the dependencies listed in package.json
- Run `npm run start` to start the local development server

## React Hooks

- Function that performs a specific task inside React, like "hooking into" React state or component lifecycles
- Start with the word "use" (useState/ useEffect)
- Piece of code/function that someone wrote
- Hooks can be from React, or you can write them yourself (custom hooks), or you can import them from somewhere else (like a different framework like Redux)

## useState hook

- A hook that creates variables that React listens to. It "reacts" when the values of these variables change, by re-rendering the components!

## useEffect hook

- Use it to fetch data (async)
- Help control the amount of re-renders on the page
- Steps:
  //Fetching data from API flow
  //0. Install axios package
  //1. Write an async function
  //2. Make a request with axios
  //3. Console.log what I'm getting back --- this is what we've already learned
  //4. Import useEffect from 'react' --- this is new for React
  //5. Call the async function inside useEffect
  //6. Check my console.log and put the data in the state
  //7. React renders something on the screen based on state
