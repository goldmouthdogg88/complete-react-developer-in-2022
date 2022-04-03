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

Welcome back, everyone.

So when we look at our React application, we see that this website is pretty static, meaning that

things don't really change.

Yes, our logo spins, but none of this text really changes and this link doesn't change where it links

out to.

No matter how many times you click this link, it's always going to take you to the React website.

This is very atypical of the complex applications that we're used to working with.

So when we look at our app jazz file, that makes sense, because when we look at the code inside of

here, everything is hardcoded and you'll hear this a lot when something is hardcoded.

What this means is that there is nothing dynamic about the code that text inside the P tag is exactly

what we see it us.

This is exactly what will render the string inside of here.

There's nothing dynamic about it.

There's no way that that string is ever going to really change.

But that really isn't useful for us when it comes to building websites.

And this is a very important thing to understand because essentially what we want to do is we want to

make it so that react will render this string code dynamically based on something.

Whatever it is, we want to have control over that.

And that's what we're going to go into in this lesson.

So here what I'm going to do is I'm going actually change up this text so that it says, Hi, Iowa again.

It's still hard coded, but that's all I really want you to focus on.

And I'm also going to create a button instead of that anchor tag.

And inside it's going to say change name, meaning that when you click it, I want to change this name.

So right now, it's still hardcoded.

And when we go back, what we see is that React has re rendered our webpage so that now it says what?

I change it to Hiwa, and it has a button that says change name.

Now, of course, when you click it, nothing happens because we haven't coded in that functionality

yet, but that's what we're going to do.

So here you see what is still hard coded.

It's still not a variable.

It's nothing, really.

It's just hardcoded Yihua.

But I want to change this so that maybe when I click this button change name, this value will change.

So how do we do that?

### Local State

Well, going back to our class component that React has given us.

React actually allows us to do this quite easily.

And what we can do is use a method that we have access to with any class, but React has actually gone

into it and made some modifications that allow us to keep track of something called **local state**,

**Local state** or just state for short is just some information that only this component is aware of

and can modify and can read from.

So the way that we can actually access and generate this state is through the constructor method.

- The constructor method is a method that's available on all class components.

And you can see constructor as in construction.
And why that's important is because it's saying that, hey, whenever this app is constructed, whenever
it's built, instantiate it any of those terms.
I want you to run this constructor method first and inside of this constructor method you call **super**.
**Super** is not actually important for what it does for our React component code as far as you're concerned.
All it is is a saying, Hey, call Super Super just calls the underlying constructor method of any other
classes you are extending from.

So here are class app extends from component.

Just call super so that you're calling the constructor method on the component.

If you're unfamiliar with what that is doing and why that's useful, you can watch a video that I'm

going to link where Andre keeps a deeper dive on classes in general and you'll understand what that's

happening there.

But for now, you just gotta understand that whenever you write this constructor, you've got to write

the super.

This is really not that important for how it extends into our functionality with these class components

and what we dictate.

But it's just something that needs to happen and you need to write.

But going back to state here inside of our constructor function, I mentioned that React will run this

constructor method before anything else.

In fact, all classes do that.

But what I want to do here is I actually want to instantiate this state that I was talking about, and

to do that, I'm going to say this, which is referencing this class.

This starts state this is something that React is looking for inside of your constructor, inside of

your component.

I want to say this that state is equal to a empty object.

So for now, it's an empty object, because I'm told that what the state value should be, but the state

is always a JSON object.

And here what I want to change this to is I want to give it a key value pair inside.

Key value pairs can be whatever they want.

So whatever key you want to have and then whatever value you want to give it here because we're working

with names, I'm going to say this starts day equals empty object for now, and I want to give it a

name key.

And this is going to point to a string value of Yihua.

```js
this.state = {
  name: "Yihua",
};
```

So now that I have this, I want to actually instead of hard coding Hi Yihua, I wanted to reference this

state object and I want it to reference the name key so that I can get the whole value to do that inside of JSX.

I can actually access JavaScript variables, which is why, as you can see, we're tying what it looks

like, what the functionality and the functionality, of course, being the JavaScript.

So in order to use this variable, we can actually use curly braces inside of our HTML, through our JSX, react is looking through this HTML and saying, Hey, whenever I see curly braces, I know you want to access a JavaScript variable.

And the variable I want to access is this.state.name.

```js
<p>Hi {this.state.name}</p>
```

And now, if I save this and we go back to our website, we see that nothing's changed.

This is exactly how we want it to be.

But let me prove it to you instead of equal, let me say Andre.

And if I save.

Look, we now see it says, Hi, Andre.

So we know that instead of hard coding, this is now using the variable.

This starts state dot name, which right now is equal to Andre.

So this is what's so great about using state, because now we're able to cast these variables that React

has access to inside of this component and using this, we now have more dynamic ability.

We don't have to hard code all of these values inside of our demanding JSX.

In fact, you can kind of see it actually already being scaffoled out for us here with this logo, but

this is a little bit more complicated than we need to dive into right now.

But essentially, what I want you to focus on is the fact that this is so powerful.

Now we inside of our HTML can directly use and leverage JavaScript variables.
\*\*\* And whenever these variable change react will re render this HTML that we see.

So that its using the updated variable value.

And this is incredibly powerful.\*\*\*
So again, right now, all we know is that we are able to leverage this value that has been initialized

when our constructor gets called.

But it's still a dynamic.

We're not changing it on the fly, maybe not even through user interaction, but that's how we're going

to cover in the next video.

How do we update this value?

How do we tie some of this functionality to it and then make it more dynamic?

But again, what I really want to focus on again is this is how React is allowing us to render and re

render information that represents the UI.

So in the next video, let's cover how we can make this more dynamic.

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
