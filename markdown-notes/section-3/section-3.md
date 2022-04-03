<style>
    blockquote {
    margin: 0;
}

blockquote p {
    padding: 15px;
    background: #eee;
    border-radius: 5px;
}

blockquote p::before {
    content: '\201C';
}

blockquote p::after {
    content: '\201D';
}

</style>

# Section 3: React Basics

## 14. Section Overview

<div class="end-of-section">
    <br />
    <br />
    <br />
    <p>---------------------------------------------------------------------------------------------------------------------------</p>
    <br />
    <br />
    <br />
</div>

## 15. Environment Setup for Mac

## 16. Environment Setup for Windows

## 17. NPM vs Yarn

## 18. Yihua's VSCode font and settings

## 19. VSCode Settings Update

## 20. Create React App - NPX

[monsters rolodex](https://zhangmyihua.github.io/monsters-rolodex/)

We'll learn how to create a react app without the tool create-react-app

<div class="end-of-section">
    <br />
    <br />
    <br />
    <p>---------------------------------------------------------------------------------------------------------------------------</p>
    <br />
    <br />
    <br />
</div>

## 21. Create React App - React-Scripts 1

We're going to look at all the files and folder, create-react-app created for us.

```json
...

 "dependencies": {
    "@testing-library/jest-dom": "^5.16.3",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  }
...



```

We have some libraries pre install for testing

React scripts is a package helper, to make our lives easier when developing a react application.

start: Takes all of the files written for our application and run it.
taking all the files in /src and building out the actual React application.

## 22. Create React App - React-Scripts 2

## 23. Create React App - Everything Else

## 24. Don't Eject

## 25. Hooks vs Classes

Classes - general purpose
Hooks - React specific

## 26. Monsters Rolodex - Class Components

And this concept is the idea of rendering, in my opinion, what makes a great react developer from

a good react developer is a great react.

Developer really understands when React is rendering and re rendering your website.

This is one of the most core and essential things to understand with React, because that's really all

reacts.

We either going to write React with class components or functional components with hooks.

How you tell React how to render and re-render your website. Understand how react renders and re-renders your website. its all React really does as a framework.

This website was loading and waiting for react to render somthing onto the page.

What happened was that this page was rendered, putting some UI HTML,CSS,js onto the page that a user can interact with. Something is done rendering when a user can interact with it.

JSX makes it easier to tell our JS code what we want it to visually render to the page.

Again this has to do with the rendering.

Writing a functional component is one way to render something to the page.

Another way is using a class component.

We are going to start with class components

it allows us to tell React what we expect, react what to render but **how** to render.
We want to start with class components over functional components because,
A class component is easier to understand when React will render and re-render things. and I'm going to show you how.

<figure>
    <blockquote cite="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554050#overview">
        <p>and I'm going to show you how.</p>
    </blockquote>
    <figcaption>—Yihua M. Zhang, <cite>
Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
</cite></figcaption>
</figure>

## So what we're going to do is just convert this into a class component.

```js
import { Component } from "react";
```

{ Component } is a class that React gives to us. It allows all the components that we write in a class component format to get access to some of the functionality that by default React has already built for us inside this component class.

We are passing the return statement to render(). Inside of the return is going to be the JSX we want to give back.

In the next video, we're going to learn about some additional things that we can do that we can jump

in and modify both what we're rendering and how we want things to be re rendered.

And that will really help us be able to actually begin to modify our website to be more like an app.

## 27. Monsters Rolodex - Component State

## 28. Monsters Rolodex - setState

## 29. Monsters Rolodex - States and Shallow Merge

## 30. Monster's Rolodex - setState and Secondary Callback

## 31. Monsters Rolodex - Mapping Arrays to Elements

## 32. Optional: Map() + key attribute

## 33. Monsters Rolodex - Keys for Mapping

## 34. Monsters Rolodex - Single Page Applications (SPAs)

## 35. Monsters Rolodex - Lifecycle Method: componentDidMount

## 36. Optional: Promises

## 37. Monsters Rolodex - Renders & Re-renders in React

## 38. Monsters Rolodex - Input Search Box Component

## 39. Monsters Rolodex - Searching & Filtering

## 40. Optional: filter(), includes()

## 41. Monsters Rolodex - Storing Original Data

## 42. Monsters Rolodex - Optimizations

## 43. Monsters Rolodex - Understanding Components

## 44. Monsters Rolodex - CardList Component

## 45. Monsters Rolodex - Component Props

## 46. Monsters Rolodex - Rendering and Re-rendering part 2

## 47. Monsters Rolodex - SearchBox Component

## 48. Monsters Rolodex - CSS in React

## 49. Monsters Rolodex - CardList Component

## 50. Quick note on quotes for string interpolation

## 51. Monsters Rolodex - Finishing Touches

## 52. Functional vs Class Components

## 53. Class Component Lifecycle Methods Breakdown

## 54. Monsters Rolodex - Functional Component Intro

## 55. Pure & Impure Functions

## 56. Monsters Rolodex - Hooks: useState

## 57. Monsters Rolodex - Functional Component Re-rendering

## 58. Monsters Rolodex - Infinite Re-rendering

## 59. Monsters Rolodex - Hooks: useEffect

## 60. Monsters Rolodex - Remaining Components

## 61. DOM and Virtual DOM

## 62. React and ReactDOM

## 63. React and ReactDOM part 2

## 64. DOM Paint Flashing

## 65. Optional: Git + Github

## 66. Optional: Connecting With SSH To Github
