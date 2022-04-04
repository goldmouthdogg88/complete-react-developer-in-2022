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

<div class="end-of-section">
    <br />
    <br />
    <br />
    <p>---------------------------------------------------------------------------------------------------------------------------</p>
    <br />
    <br />
    <br />
</div>

## 28. Monsters Rolodex - setState

Welcome back, everyone.

In the last video, we learn about initializing some local state inside of this component, which is

an object that has key value pairs in it.

And then how do we access that state object or any JavaScript able really inside of our JSX code?

In this lesson, we're going to learn more about extending some JavaScript functionality into these

components to do something much more dynamic and much more useful when it comes to building applications.

So what we want to do is, let's say, I just wanted to click this button change name and then have

it change from Yihua to Andrei.

How do I do that?

So inside of your JSX, React actually allows you to bind event handlers onto any HTML element.

So what is an **event handler**?

An Event handler is really just something that I want to happen whenever an event happens.

So what this means for our button, for say, is every time this button is clicked, I want something

to happen.

So to do that, I have access to this on and then the name of the event in this particular case, I

want on.

Click.

So whenever this gets clicked, I want some functionality to happen and the way that I can tell it,

what functionality are to happen when I click it is, I say on Click is a property which is equal to

a block of JavaScript, and we'll remember whenever I want to access JavaScript, whether it be a variable

or even hardcoded in JavaScript, I use these curly braces.

So here I'm saying Hey on click equals and then inside of here, what on click is expecting is a function.

You may hear the word function or callback function used pretty interchangeably, a callback is just

a function.

You pass to some kind of handler that you wanted to call during some process.

In this particular case, of course, I want it to be called whenever it gets clicked.

So I'm passing it right now, this empty function, so nothing will happen.

But what I want to do whenever this button is clicked again is change the name value to Andre instead

of EÜ.

Now you might think, Oh, let me just do this dot state dot name is equal to Andre.

But this is actually not going to behave the way that we're expecting it to.

In fact, let's also console log this start state just so that we're very clear about what's happening

once we save this.

So if we go back to our application, we hit this button change name no matter how many times we hit

it.

We see the EUA here is not updating to Andre, even though the object that gets logged out is the correct

value we're expecting.

We see that our object here name is now Andre.

But why is it that inside our application, it's still using the previous value of EUA?

Now this actually has to do with the way that react determines when a component needs to re, render

and re rendering.

In this case, as I mentioned, is when React decides, Oh, I need to update the DOM or repaint the

UI.

So let's break down why exactly it is that here this is not working the way that we want it to.

This actually has to do with the fact that we're not actually changing the object in a way that react

recognizes that the state object is different.

Now you might be wondering, well, Yehuda, the object is different.

It used to say name equals equal.

Now it's his name equals Andre.

But for React, it's not leveraging that change in the values in the object as a actual change.

The way that react to text it that there's a change is that uses JavaScript underlying reference by

memory for an object.

What that means is that in memory, whenever we instantiate a variable, let's say const object one,

and let me say that this object is equal to the same object that we have as our state.

So name is equal to EÜ.

This object one is just pointing to this object when it gets instantiated.

So what happens is that under the hood, JavaScript goes, Oh, there's this object I want to create

in memory, which has this shape name equals EÜ And then I'm going to create some variable called object

one, and it's going to point to this object that is just made.

An easy way to see this is if I say Object two is equal to object one.

What's happening here is that JavaScript like, OK, this object one, what's it pointing to?

It's pointing to this object in memory.

So I'm just to make object to a pointer that points to the same object in memory.

And now if I say object to strict equality, which is three equal signs equals two object one, it'll

say that it's true.

Strict equality just says, are these two pointers pointing to the same thing in memory?

Yes, they are.

This is object equality when you do triple equals with objects.

The reason why this is actually not working for react and updating the DOM has to do with this concept.

Let's say we say object one name is equal to Andre.

When I update this object, one now has that new updated value object to also has an updated value.

And this makes sense.

They're both pointing to the same thing in memory.

But again, this object in memory is not different.

It's the same object in memory.

So even though the value has changed, it's still the same thing in memory.

So for React, React actually says the only way I'm going to update a component when I know that the

state is different is if there is a completely different object in memory.

And how does that happen?

Well, let me give you an example, let's say we make another object object three.

And in here we use object dot assign.

Object assign is a method that allows us to create a different object using another object as a template.

So let's say first, what I'm saying is the first argument is a new object, a brand new object.

So this is the first argument.

It's like, what do I want to make or assign a new object from?

The first one is a brand new object right here.

The second one, I want to use object one.

Now, if I look object three, it has the same signature or it has the same shape as object one.

It's still named because Andre.

But now if I do, object one equals against strict equality with object three.

I see that it's false.

And the reason for this is because this object, even though it's the same one as object one when we

change it.

These are two different objects in memory.

An even easier way to do this is if I say Konst Object four is equal to an object with the name Andre.

Here you'll see that I'm typing out a brand new object.

So this is a completely different object.

Even though it looks the exact same as Object one and Object 2's pointing object in memory, even object

three.

They all look the same.

But when we do strict equality with Object four, we see that different.

Object three.

An object for completely different.

Not the same object and memory.

So this is when react will determine that it needs to re render.
<h2>
Your component is when state is a completely different object in memory.

The moment it's a different object and memory react will be like, OK, it's time to update this object.</h2>

So let's do that quickly, actually.

How do we do this?
### setState()
Well, an easy way that we can do this react actually gives us a method, and it's called **setState**.

Now, setState is an interesting method because there's actually many ways to use it.

But I'm going to show you the very basic, simple way, which is that you give it an object that you want to shallow merge with your current state object.

What's **shallow merge**?

A shallow merge just means that whatever values that you pass to me inside of this object. I am going to update and check through the state object to see if there are the same keys.

If there are the same keys, I'm going to update your state keys with the new value.

Give me.

So here I'm going to say name is equal to Andrei.

So what's going to happen is that when we call this?

React is going to be like, OK, you want to call sets state.

So you want to update the state value, what do you want to do?

You want to take this object and you want to say, Oh, I want to find any name on this object and I

want to update it to the new value.

So now this, I'm just going to say name because Iowa, instead, it's going to update to name equals

Andre.

So now if we go back, we clear we had changed name.

We see that it's updated.

And the reason for this, again, is because what sets state does under the hood is that it's actually

updating state to a different object and react once it detects, Oh, state is now a different object

in memory.

Let me re render this component and in turn, update the applications UI.

So now that we understand a bit more offset state as well as object and reference, which is how React

determines when a component updates, let's go more in-depth into setState(), which I will do in the

next video.

So I'll see you there.

<div class="end-of-section">
    <br />
    <br />
    <br />
    <p>---------------------------------------------------------------------------------------------------------------------------</p>
    <br />
    <br />
    <br />
</div>

## 29. Monsters Rolodex - States and Shallow Merge

In the last video, we learned about how a class component decides that it needs to render when the

state is different, the way that it determines that the state is different is when it sees that the

state object is now a different object in memory.

And the way that we can best use this is to utilize the class components set state method that React

has given us.

As I mentioned in the last video, that state can take an object and it will in fact shallow merge this

object into your current state and give you a new state object.

But there's actually other things you can pass the said state, but we'll talk about that a little later.

For now, I want to focus on the shall emerge, so we really understand what it does and then what the

best practices for it are.

So when you pass it, an object, as we saw with shallow merging, it will look for any keys that exist

in the current state object, and we'll update them to the new one that we have in our case.

We're updating name to Andre so we can actually see this if instead we do another value.

Let's say company is equal to ZTM.

And just to be clear, let's also render this to our UI, and I'll say hi.

I work at.

And then this Scott state company.

So I haven't modified said state.

We're still just updating the name.

And if we go back to our application, if I hit change name, it says, Hi Andre.

I work at XHTML.

And just to be clear, let's also console.log this start state.

And if I save this.

Now, if I click this again, you'll see the first time that we click console.log our state objects

skills as one company, but I'll break this down a little later as to why that's happening.

And it's not what you expect, which is why is it not saying Andre if I click it again?

Now it's Andre.

So don't worry about this.

For now, I'm going to talk about why this is happening a little later.

But for now, what I want you to focus on is the fact that what happened with that shallow merge is

that name did get updated to Andre.

You'll see.

Name is now Andre, but the company stays the same.

So this again is a shall emerge.

It only updates the keys for the values that are being passed to it.

Anything else it keeps and it retains the same way.

Now, one important consideration to make about the shallow merge is that there's actually a thing that

yields a best practice when we do this, because with a shallow merge rack doesn't care what the value

was before.

All it cares about is that I see that the keys match.

I'm going to update the value regardless of how complex the previous value was.

What do I mean by this?

Well, let's update names so that instead of a string, it says that it's an object that has a first

name value as well as a last name value.

And now inside of my string, let's also update this Star State name, first name, so that it's now

referencing the new value that we have, which is an object.

And I want to point to the first name as well as the last name.

So now, if I save this and I go back to my application, we'll see that now it says, Hi Juzang, I

work at XDR-TB.

When I click change name again, we see that this was the previous value, so let's ignore this again.

I'll talk about this in the next video.

But let's say it again, you'll see what happens is that our state object got updated.

So that name is Andre.

But here we see that our app is not working, that we expect it to.

It's not displaying Andre anymore.

And this makes actually total sense because name is now just a string.

It's not that object that we had before the first name, last name, complex object.

And the reason why that this is not rendering is because when we look at our code, our code is looking

for this dot state dot named Dot first name and this dot state dot named Dot last name.

But of course, as we know, a string doesn't have a dot first name or a dot last name property.

So now our code is breaking.

But again, with a shallow merge rate doesn't care that this is a completely different shape or even

in fact type, then what it was before, because now we got a string before as an object.

RAC doesn't care.

Let's say, Oh, you just want me to shallow merge this key of name value to replace the old one.

I'm just going to do that.

So this actually extends into a best practice so that our code doesn't behave in this weird way where

it breaks.

We want to make sure that when we update our state, we're always using the same types of values for

our object properties.

So if your name is going to be an object, make sure that you update it appropriately, like so.

So that here first name is still Andre.

And last name is Niagara.

I hope I spot that right.

So here now when I click change, name now works the way we expect it to.

So this is an important thing to understand about using such state when you pass it and object.

So now that we understand that state with an object, I'm actually going to in the next lesson, break

down what the different way you can use that state is where you don't pass it an object, but instead

you pass it a function.

And with this function, it's actually the preferred way to do so.

Not all the time, because you will see a lot of projects use such state where they pass it and object

still.

But as far as reax own suggestion goes, you should use the function and there are certain parts to

it which I'll explain in the next video.

Similarly, it's also going to explain why whenever we were logging our state object in our experiments,

we see that the first time I do so, despite the fact that the value in the UI has updated, my console.log

seems to be behind because the object still says firstname lastname of the previous value.

So we're going to break that down in the next video, and I'll see you there.

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
