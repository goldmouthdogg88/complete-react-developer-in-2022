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

Welcome back, everyone.

So I know we're spending a lot of time with such day, and you might be wondering if let's just build

Monster's Rolodex.

But I really think this forms a great, solid foundation moving forward of really understanding the

code that you're writing and how reacts engine works at a high level.

If we build the solid foundation of just understanding how through set state and state and this class

component that react determines when to render or render a component, we really can very quickly understand

all of the other nuances of components and react, as well as why something is working or not working

and just the general flow of everything.

Because as I mentioned with React, it's really just all about components and how and when they render

or we render with such state.

I showed you earlier that when we just passed the object, we do a shallow merge, which in turn React

does do an update.

But inside of this same function, so the same callback that we gave to on click.

We also did a console.log dot this dot state.

And yet, for some reason, once this console.log ran, we were seeing our old state object and not

the new one.

So just to clarify, when we refresh here, what we should begin with is high.

Using this should be the initial state, which it is, as we see demonstrated in the UI.

But I click change name UI updates to Andre Aniagwu.

But for some reason, the console.log still shows the previous. Why is this?

So this again actually has to do with the way that React does its re-render, which is where Re-rendered

our component.

However, with this set state call, what's happening here with the shallow merge is that this is actually

happening asynchronously.

So typically what JavaScript code code happens in asynchronous manner, meaning that it runs one by

one by one by one.

In this particular case, we're expecting that within our callback that we update the states and then

we console.log this start state.

But clearly, as we see this is getting run first.

However, the state is not being updated when this console.log runs, meaning that the state at this

point is still the previous one.

Why is this is because React batches these different sets state calls so that it can determine what

the most optimal strategy for re rendering the website is going to be.

What do I mean by this?

Well, let's say you imagine that you have an application where you have a lot of different components

and perhaps through one interaction, one button click, you're actually updating the state in multiple

components, not just this one, because inside of here, we have one component right now with one state,

but you can imagine how in a more complex app, one interaction might update the state of multiple different

components.

In that case, React doesn't want to just completely isolate and do all those different updates independently.

RAC wants to figure out if it can stack these together, or maybe there's a more optimal way of updating

these components so that it is more performance.

That's all what React is doing under the hood for us.

So as a result, set state as a call is a non synchronous call.

It's an asynchronous call, meaning that when consort log, which is asynchronous call, gets called

at this point, the state might not be updated.

It may or it may not be.

Chances are it's not.

So you might be wondering then?

Well, with such state, then what if I want to use the latest state after I've updated it inside of

my code?

Somehow, like in our case, I want to console.log and make sure that my state is up to date.

Now we can achieve this where instead of passing this object to such state, we can pass it a function.
```js
this.setState(() => {}, <callback>)
```
So in this format, there's actually a different way.

So as I mentioned, we can pass it a function.

And what we can also pass, it is a callback, so these are two different arguments that you can pass

to set date.

If you pass it like this, you'll actually be able to get a more consistent synchronous behavior.

Not really, but just at least one where we anticipate what's going to happen.

So let me break this down, so I'm going to comment this up.

So this first function is a updater function.

The first function that you passed a set state here is going to be some function where you return an

object that it will then use to shallow merge against state.

So this is kind of very similar to what we did before.

When we just passed the object that we wanted to shall emerge again state as the argument to set state.

But now instead, we're passing a function that returns.

This object that we want to again shall emerge.

So you might be wondering, what's the point of doing this additional function?

Well, the reason why we do this is because within this function, we get access to state as well as

props, props I'm going to cover later.

```js

onClick={() => {
              this.setState((state, props) => {
                return {
                  name: {firstName: 'Andrei', lastName: 'Neaogie'},
                }
              }, () => {});
              console.log(this.state);
            }}

```

But state at this current moment, this state variable that we have access to is equal to the current

state.

And the reason why we want to use this is because sometimes we want to maybe update our state based

on the previous value of the state.

Props, on the other hand, is something that does with components.

It's different values that you can pass to your component, and we're going to do a whole separate lesson

on that and deeper understand it.

For now, just understand that you don't really need it right now.

But if you wanted to utilize props somehow inside of your state, you can do so.

But again, don't worry about it.

These are both optional, as you can see right here.

I'm not even going to use it.

I'm just going to use the return where I passed the object that I want to have.

So let's just save this and see if it still works.

So if we go back here, we see using a head change name.

It's updated to Andre Nagwa.

So just like we saw earlier, this is doing that same state update as we had before reactor's registering.

Oh, it's a different object in memory.

I can now re render, which we saw, but I mentioned earlier that we want to see the console.log show

the correct value.

Well, that's actually what this second argument is.

This function that we wrote this callback.

Again, as I mentioned, a callback is just a function that my code says, Oh, once I'm finished,

I want you to run this callback.

So here inside of this function, we can write whatever we want, and I'm just going to console.log

the new states of the Star State and what happens here is that this console.log inside of this function,

this function is going to run only after all of the state changes have been applied, meaning that only

one react has determined in its asynchronous manner.

Oh, I've updated shall emerge the state and now the state is the new object, then I'm going to run

this callback function.

So now if we save this and we go back now, if I hit change name, what we'll see is that we have the

correct newly updated state.

And this format is actually the ideal optimal way that you should be writing your set state code in

class components.

The reason for this is just because by doing this, it's much more clear what's happening.

You don't have to use the previous state or the props values.

As I mentioned, we're definitely not doing that here.

But in this way, anyone looking at it just anticipates and understands what's going to happen.

It's going to understand that, oh, this object, just like before, is just going to be the thing

that gets shallow merged, but also that this follow up callback, if there is one, is going to run

only after the state is fully updated, which makes it much easier to think about what's going to happen.

You don't have to consider, Oh my God, at this current moment, is my code actually updated or not?

You know for sure that React is handling that.

The moment that the state is up to date is only when this callback is going to get run.

Now again, this callback is also entirely optional.

You don't have to pass it.

You can just pass it this function if you don't want to run a callback after state updates.

There's nothing wrong with that.

If we refresh and we clear out our console, we change name.

Our code still just works.

So this is just a very key thing to understand, except state and how react determines when to update,

when to batch things, to make it more performant.

And also when to run after it's updated the state.

And this is really all it is.

I know there's a lot that we learned about such state and we're going to get a lot of practice.

So don't worry, we're going to practice with it.

We're going to get familiar with it so that as we build out Monster's Rolodex, it'll become like second

nature to you about using set state.

I know I talked a lot about that state and it's really boring and really technical, but now we can

start using that state to actually build our monster's Rolodex application.

And as promised, I'm also going to talk about props and how that gets involved as well.

So in the next video, let's start building out our application.



## 31. Monsters Rolodex - Mapping Arrays to Elements

Welcome back, everyone.

So let's start actually building our monster's Rolodex project so that it looks much more similar to

the application we're expecting it to be to begin with.

What I want you to think about what this app component that we have here.

This class component, let's get rid of everything inside, except for the div.

Right now, this app component is pretty much the only component in the entire application, and it

means that it represents the entire application as well.

What I want you to think about is that when you look inside of index stocks, I want you to ignore everything

except for this part right here.

React Dom Dot render.

What it's saying is that react, I want you to render whatever's given to you as the first argument

at the point where you go on to the document and you find some element with root.

I explained to you earlier that when you look inside of the indexed HTML file that got generated for

us, we had this div with the idea of root.

And what react does is it says, OK, instead of this div, I want you to render the entire application

and the way it does that is it takes this argument, which is really just the app as far as we're concerned.

This app is this component, whatever this component renders, is whatever react Dom is going to render

in this place.

So here this component is actually going to contain our entire application.

All of the turmoil here that we're going to return is going to be all of the matter of our application.

And these are going to be broken up into smaller and smaller components and we'll talk about how that's

done.

But what you need to understand really is that this app component represents the entire application.

It's a pretty common best practice to do so where you have one app component and this app component

is what you use to render as the entirety of your application.

So now that we understand that the app is going to be the actual application, let's start actually

building it out and understanding what it is that we're trying to do so with monsters Rolodex.

It is a Rolodex, which is a tool that shows you a bunch of different user profiles.

In our particular case, these users are monsters.

Now, let's say we wanted to show three monsters, how do we go about doing that, doing what we know?

Well, to begin with inside of state, maybe we have three different monsters.

We have monster one, which is going to be a monster with the name of Linda.

We have Monster two, which is going to be a similar object with the name of Frank.

And then we have Monster three.

Which has the name of Jackie.

Here inside of our div, we want to render these three monsters somehow.

And for now, just to keep it simple, let's say we render these monsters names as ones.

So what we can do is we can say each one.

And then using curly braces monster one dot name or sorry, this dot state dot monster one.

Dot net.

And then similarly, we would just copy this three times, and now we use Monster two and Monster three.

Now if we save this and we go to obligation, we see that we have it updated.

Linda, Frank and Jackie are showing.

So our code is working.

But let's go back to this code here.

This is actually pretty repetitive.

If we had 100 monsters or a thousand monsters, if we imagine a really big Rolodex, then we have to

copy and paste this a thousand times.

That seems extremely inefficient, doesn't it?

What if instead, we know that all of these different things are going to be the same?

All these different monsters are going to be displayed using just an H1.

Can we instead just use this as a template, especially if every single one of these monsters is the

same shape of data?

The object is just an object that has a name of Jackie or a name of Frank or name of Linda, or a name

of whatever.

We know that we can expect that this object is going to have a name property that's going to be a string.

So we just don't want to put that string inside of an H1.

Can we just reuse the same HTML template?

Well, actually, we can, and this is what we're going to do to make this way easier for us.

So what I'm going to do is that instead of each of these individual monsters having their own key on

the state, I'm going to make a new key called monsters.

And it's going to contain an array.

Inside of this array is going to be my three monsters.

So I'm just going to copy this over and get rid of the keys because it needs to actually look like an

array.

So now I have a monster's key with an array of our monsters, as we had before, and now instead, what

I'm going to do is I just want to use this H1 template.

But how do I access this array and convert it into those h1s?

Well, here I'm going to use the array method map.

So inside of our HMO, we're going to once again now call squiggly braces because I mentioned before

that we want to access JavaScript.

So I want to say this starts state dot monsters, which gives me the array and I want to use the dot

map method.

The Dot Map method is a method that allows you to iterate over every single element from left to right

inside of your array, and it gives you back a new array.

But why is this useful, because what we really want is an array of HTML elements with the shape that

we expect the HTML to render.

So in our particular case, we want to return a bunch of ones where the text inside is the name of the

monster.

So right now I have an array of JSON objects.

I don't have an array of the JSON amount.

So how do I do that?

I use Stop Map Dot Map.

The way it works is you pass it a callback function.

This callback function, the first argument that it gets, is the actual element.

So in this case, it's a monster.

We know it's a monster.

What react does, or rather what JavaScript does with that map because Map is a JavaScript method on

a race is that it takes the callback function that you pass to it and it invokes it on every single

element inside of the array, from top to bottom or left to right in this particular case.

So we know that when we invoke this callback on this element, this one first element, first inside

of our array, this monster is going to be the element itself.

It's going to give us that JSON object where the name is, Linda.

And here what we want to do is we want to return back the H one, as I mentioned where I'm calling.

So once again, we need the curly braces because we're inside of each animal.

I want monster name.

Here, what's going to happen.

As I mentioned, is that React is going to look at your code and say, Oh, inside of here, there is

some curly braces.

You want to access this dot state dot monsters, which is an array and you want to map over it.

What you want to do in that map is you want to give me this callback function where I'm going to take

the elements that you're trying to iterate through.

So each of these different monsters and I'm going to give you access to it inside of the callback.

And what we want to do is want to say, OK, what's that monster or what that element?

I want you to return me in that place and one where the inside is using monster dot name.

So this particular monster, I'm going to put Linda in there.

And then the next one, when I iterate on the second element, it's going to use Frank.

And then in the third element, it's going to use Jackie.

And here, when we look at our code, we see that it still works.

In fact, to prove that it's still working, I'm just going to add a fourth one and this monster is

going to be Andre if I save and I go, there it is so, so easy now.

The inside of this array, all we need to do is just make sure that we have an array where every object

has the same signature or the same shape.

And now inside of our code, our dot map function is always going to now just generate a new one every

time a new monster is added inside, or it's at least going to do it for every single monster inside

of our array.

And this is extremely powerful because by doing this now, this one block of code right here now encapsulates

the entire UI rendering of all of the different monsters that we want to show.

And this is an extremely powerful thing about React.

Now, if you're unfamiliar with that map, we're going to include a video in our appendix where I'm

is going to go into more depth about Map if you're uncomfortable with it.

But if you are and you already understand how a map works, then let's move on to the next lesson and

the next lesson.

We're going to talk about something that some of you might have seen.

If you have your developer console open, you'll see that there's this warning where each child in a

list should have a key property.

And we're going to go into exactly what that means in the next video.

I'll see you there.

## 32. Optional: Map() + key attribute
::NO VIDEO::
## 33. Monsters Rolodex - Keys for Mapping

Welcome back, everyone, in this video, we're going to break down this warning, which says that each

child in a list should have a unique key property.

What does this mean?

A key property is just a property on the actual.

You can see it as a template or you can see it as the element HTML that we're returning from our map.

In this particular case, it's the one rack just saying, Hey, I want you to give me a key property,

which is some unique string value, or it could be an integer.

It doesn't matter.

React is going to turn into a string either way.

So here, if we know that, let's say, for example, our names are currently unique, then we could

pass it a name value.

This will work in our current context, but you can imagine that there might be a case where if we had

a thousand people, one of these names might overlap, we might have two different monsters named Frank.

If that's the case, well, then this is no longer unique.

So what we need to do is actually use a unique value, and most of the time a unique value is going

to be an ID.

So when most projects in most APIs and almost everything where you're getting some kind of data, they'll

have an ID value, which is some kind of string that's like very complicated.

And usually it's extremely complicated in a way that no two of these strings is identical, making them

completely unique.

And this is what we're going to use inside of our key value.

So instead of monserrat name, we're going to say monstered ID.

So you might be wondering, well, you are.

Why do we need this key value?

This again goes back to react and re rendering.

This key value is actually something that REAC uses in order to make it more optimized when it comes

to updating and re rendering components on your page.

On this page, we now have one app component, yes, but we have four different ones that React has

rendered onto the page for us if we inspect.

What we see is that inside of our app, which is the div, which is our component, we have these four

ones.

But React won't actually update this dom directly, as we've seen before, when we, let's say, add

more to our components.

In this particular case, how does react actually differentiate Linda from Frank, from Jackie, from

Andre, these different ones?

The only way it can do it is by using the key value.

And why is that important?

You might be asking.

Well, let's say, for example, what we did is we updated the name of Jackie to something else like

Yehuda, for example.

When react, does that, does that mean that reaction now re render every single one in this entire

list?

Or should it just re render Jackie so that now it says Iowa?

In order for Iraq to do that, it needs to be able to properly differentiate these different components

from each other because as I mentioned, these components are all using the same template.

So how does react actually differentiate them and know that when Jackie got updated to what only Jackie

needs to be up to date?

Well, it uses that key value, that unique key value that associates that component to that bit of

data.

That is the purpose of the key.

So we'll talk more about this when we start building a more verbose website.

But for now, that's why whenever you use Dot Map and you map out a list of HDMI html elements, you

want to make sure that the top level the very highest one.

So let's say if this one.

Actually, let's make this a div.

And inside of this div, we have an H1.

We want to make sure that at the highest level of this element, which is the death that we add this

key.

And I we go back.

We'll see that each of these are divs with the ones you might be wondering, well, I added the key,

but is it not showing up inside of the elements?

Well, this is actually something unique for React.

React is going to be the only thing that needs that key value.

The regular HTML when it actually gets you built doesn't need the keyboard, so ract takes it off.

But it knows under the hood it's keeping track of this key.

And using this key again is able to be much more performant and efficient when it comes to differentiating

these components from each other and then figuring out which ones to render appropriately when their

values update.

That's the whole point of the key.

So now that we understand this key, let's now move our application towards something that's much more

typical of what we would expect instead of hard coding this array of monsters.

Let's fetch it from an API somewhere in the next video before we talk about that.

I'm going to talk about some of the higher concept of why that's important when it comes to react and

single page applications.

So I'll see you in the next video.








## 34. Monsters Rolodex - Single Page Applications (SPAs)



Welcome back, everyone.

In this lesson, we're going to talk about how to get arrays of information from somewhere that is not

just hardcoded on our website.

So let's think about applications for a second.

Right now, this array is hardcoded on our React application.

The only way that this code can be updated is if we update this directly using some JavaScript code

as we saw or if we manually update it through typing.

Almost all applications don't do this when it comes to any kind of dynamic information.

This is dynamic because these values can change.

We could get new users, we could get less users.

You can imagine on Facebook they get millions of new users or users changing their data every single

day.

It would be completely unrealistic to have that all hardcoded inside of their recode.

In fact, what they have to do is they have all of that user data living in a database somewhere and

then whenever their application needs it, they will then ask that database for that information and

then use it to populate their website.

Right now, what we're doing is we are hard coding in the website.

We're not actually calling it from any database.

And that's what we want to change.

But before we go into that, we need to talk a little bit about single page applications and why it

is that a react application as a single page application makes this whole process way easier.

So let's break down a little bit of how websites work before and after SBA's SBA stand for single page

applications and use frameworks kind of like react and angular and view to help build them.

So what we're building is a spa.

Whenever we work with React now, there are, of course, some nuances.

Once you start doing things like server side rendering or even static page rendering when you do things

like Gatsby, which is a react framework for static pages.

But as far as our application goes and this course with React, we're just focused on building our space.

But before we understand space, we need to talk a little bit about the world before us space.

So let's say you have a website.

In this particular case, let's imagine you are navigating to zero to Mastery I o, which is our website,

when you navigate there, what happens is that you actually need some code and in a non spa environment,

your browser doesn't actually know how to build this website.

So what it has to do, it has to ask for the code from some kind of server.

Now the server is going to host all of the HTML, CSS and JavaScript required to build your entire website.

So your browser is going to go, Oh, I need to access zero to mastery.

I o what do I need?

I need the home page.

So you're going to make a request to the server and say, Can you give me the code for the home page?

So the server is going to say, OK, send you back the required HMRC s s and JavaScript needed to build

the home page and then your browser takes that and actually creates the UI and the page that the user

is trying to access.

Similarly, what happens if you try to navigate now to zero to mastery IO slash react?

Well, this is a different page entirely.

So the code that we had before for the home page, not all of it is relevant.

So what again, what's going to happen is the browser is going to make another request to the same server

and say, Hey, someone's trying to access the React page, can you give me the code for that?

And the server says OK, and it will give off the required HTML, CSS and JavaScript files for the React

page, which your browser then uses and builds that page.

This is very familiar if you were using websites pre 2010.

Nowadays, there's very few websites that kind of have this interaction, but you might remember before

that there was a brief white page when you are navigating between pages on a website, which was when

your browser was actually making a request on the network to a server and getting that code, which

is why there was that white page, because essentially that's the time it takes for the network request

to ask and then receive and then build the web page.

Now, in an s.p.a environment, this is completely different.

Similarly, you're still going to ask the browser, Hey, I want to access zero to mastery dial, so

for the very first time, there will still be a request to the XHTML server because at this point,

your browser doesn't have the code for XHTML.

Oh, so it's going to make that request.

The server and the server is going to send back the same thing, some html, some yes, and some JavaScript.

But now remember, our web site is an ISP, meaning that it was built with react.

So this JavaScript code actually contains the React code, as well as the React library and all the

stuff that we wrote in order to build the website.

So now what's going to happen is that our web site, our browser, is going to take that code, build

out that home page.

And now, just like before, everything here is the same.

You have your home page, everything is built with the code that we got from the server.

But now, when you navigate to XHTML, I'll slash react.

We still have all of that JavaScript and REAC code and now react isn't need to go and ask the server

for more code.

Instead, using this real code, it itself is going to build the CFSAN HTML pages required for the React

page.

And this is the big difference.

We no longer need to go to the server for the code whenever we navigate and change pages.

Anything that you see on a web site that is an spa or built in react, what's happening is that components

are getting stripped off.

They're getting put on.

They're getting created.

They're getting destroyed.

All those processes are happening live on the browser.

Once we get that initial bundle of code that contains our React code and this is what makes react so

powerful, because now we no longer have any more of those white pages and there's no more additional

requests the server for page related code.

This is not entirely true in the future once we start doing really, really customize optimizations.

But for now and the majority of space, that's the main difference you need to think about.

Any of those optimizations are further down the line way further down the line.

You don't have to worry about that right now.

Right now, all you need to know is that through nzrpa, we're able to get the entire bundle of our

React code and our website code in one shot.

So let's talk about what we are trying to do with our monstrous Rolodex.

As I mentioned, we already are writing some of this code required to build the monster's Rolodex website.

We don't really have any pages at this point.

We have our home page, which is going to display all those monsters.

And then we're going to really just sift through them using a search bar.

But right now, we don't actually have all those monsters because we're just hard coding them.

So what we need to do is we need to access those users from some kind of user API.

We're going to ask an external API, which is going to give us back a list of those users that we will

then use in order to build out the list so that code that we have hardcoded instead, we want to get

that from an API somewhere.

Not only do we have to get it from an API somewhere, we have to learn how to actually bring it into

our React application so that we can use it.

So that's what we're going to cover in the next video, and I'll see you there.

## 35. Monsters Rolodex - Lifecycle Method: componentDidMount

Welcome back, everyone.

So here is the website that we want to use in order to get our list of users.

The website will display all of this as JSON, which is pretty much just objects of users with certain

attributes on them.

So there's an idea, there's a name, there's a username, there's email, there's address, and then

there's some other extra information.

Well, we really care about for now is just that.

There's a name and there's an ID.

We need the name to display and we need the I.D. because it is the key I fully remember.

So what we're going to do is we are going to make a request to this website, which will give us back

this array of JSON objects so very easy.

If you want this, it's actually going to be in your Reasons folder, so it's very easy to access.

And what I want you to do is I want you to copy this and then what we need to do now is figure out how

to bring this array into our React application.

So let's go back to our application and let's think about a couple of things that we need to do before

we even start coding it.

First off, what we need to do is think about where we're going to leverage the actual array once we

get it inside component.

We've actually already thought about this with our monsters array.

So what we want to do is we want to update the state of monsters to the array of users.

Once we get them from the API, here we have some hardcoded values.

But in reality, I actually don't want that because when you think about it, why would I want to use

any hardcoded values at all?

I just want to use what values come from the API.

My application should not have to worry about what that data looks like or not what it looks like,

but whether or not I get how much data, that's not something our application should be largely concerned

with.

Of course, there are certain things like there are edge cases where if it's empty, do you want to

display some kind of message that tells the user that there are no users that have been fetched?

Perhaps.

But that's not what I'm talking about here.

I'm talking about the initial state of this monster's array.

If you think about it, if you have an application that makes a request for a bunch of users, if you,

let's say, fail in the middle of that API request, let's say your network cuts off or there some corrupted

data or something that is not related to our application.

What would you want to do?

What would it matter for a user to see?

The user should not see anything that they should just see the fact that there is an empty array, meaning

that nothing should display them because nothing was properly fetched.

That is the typical behavior of most applications.

So in this case with our states, we want to think about what's known as the empty case or the null

case.

So what happens when you have an initialized state or when you have a state that has nothing in it?

So I'm told about these state variables.

Of course, a monster's here is a list of users.

So what's an empty version of that?

Well, it's an empty list or an empty array.

So we want to initialize these values as empty.

Once this is empty, now, what I want to do is I want to actually get that list of users.

And the way I'm going to do that is I need to think, when do I get the list?

How do I get the list?

Where do I put the list?

We already talked about where it's going to be in our state.

But how do I get the lists?

This is actually where React is going to give us these things known as lifecycle methods.

So when you think about a component, I've always mentioned that a components key thing and react is

just figuring out when it renders and when it re-enters.

So if our monster's array is empty, when we get the new list of array from our API, we want to update

the state object and therefore we want to re render this component.

But when do we want to get that information we want to get at the moment the app is actually mounted

or the moment it's rendered by React because we want to display the users as soon as possible in order

to do that.

We leverage lifecycle methods on this component class that reactor's given us, and these different

methods are listed here, you'll see in my dropdown.

There's a bunch of them, but the most important one is really component did Mount and component did

update and probably also come on at will on Mount, but we'll talk about these a little later.

We'll focus on component did Mount.

So component amount is a method that you have access to and inside, you want to write your coat and

whatever you right here will get run whenever the component mounts.

Mounting is the first time a component gets placed onto the top.

So the first time React renders a component onto the page that is mounting.

It only happens once through a components life.

The only time when a component might reach mount is if it's been on Mount it, meaning it's been completely

removed from the dome, and you could almost argue that it's a different component.

It might be the same app component or the same component we're using, but it's a new instance of it.

So we'll talk more about that as well as we start building out a more complex application.

But for now, just understand that the moment your component gets placed onto the DOM is when you want

to make an API request for something like users, because that's when you want to get that information

so we can display it as soon as possible.

So remember, if you need to make an API request so that your component can have the appropriate data

it needs in order to render the appropriate things.

That's when you want to put it in component that mount.

So instead of component that mounts.

How do we actually fetch from that API?

Well, we're going to use the native fetch and native fetch.

What we do is we give it the URL that we need in order to get that JSON.

So here I'm going to paste that in again.

You'll find that in your resources folder.

Once we fetch this, this is going to be a promise, and a promise is something that is asynchronous

in JavaScript.

It's essentially a promise that eventually I'm going to have a value.

We can talk more about promises in a video in the appendix, where if you're not really familiar with

it, it's a good time to watch that after this video so that you can get a deeper understanding.

But all you need to know is that what's going to happen is JavaScript is going to fetch what data it

can from here.

If it succeeds, it's going to come back and then we can call then on that value, meaning that now

we have a response back from that API request and this we want to pass a callback where the argument

is the response itself.

So the response that they give us.

Let's take a quick look at it.

So I want you to see what we're going to get.

We're going to go to our application.

We're going to open up our console.

And again, it's empty because you remember I took out all the monsters, so there's nothing in our

natural state.

But here we got a response back and inside you see, it's just this object and it has a lot of stuff

in it.

There's headers and there's like the status of whether or not it was successful, which it was.

There's the URL in which we fetched it from.

But primarily what we want is we want this in JSON format.

So what we're going to say is that, OK, I want you to return from this dot then.

This response, Dodgson, some converting this over into Jason, and this is what is being returned

from the start that.

Every day then that returns, a value is going to return another promise that has been resolved.

So here I can actually say then again.

And what I have now is the users.

And let's just quickly console.log this as well.

So remember, whatever got returned from response that Jason is going to get passed to this users as

the argument of our call back.

So if I save this, I come here.

There we see it.

If I just refresh just so you're familiar.

You'll see that this is the array of the users that we got from Jason Placeholder.

It's exactly what we're expecting.

So now that we have this, let's actually get this in our state, which we can do using said state as

we've done before.

So let's get rid of this console.log.

And instead, what we're going to say is this starts at state and here you can either pass at the object

where monsters points to users or you can use the function method.

So I'm going to use the function method and I'm going to return back an object where monsters now points

to users.

And the reason why I want to use this function method is just so that I can also pass it.

The callback when this set state is finished, just so that I can make sure that my state has the correct

value.

So now, if we go back to our code, what we see is that we do indeed have all of our users in here.

Let me refresh.

And we also see that we are logging out our new state with the appropriate monsters, with the appropriate

values.

So everything here is working.

And the key thing I want you to focus on and what we learned was that whenever we have a component,

a class component specifically, that needs to leverage some kind of API call in order to get data that

it needs in order to display the appropriate UI, you want to put that inside of your component.

Did Mount lifecycle method.

Now there are definitely more lifecycle methods that will cover in later lessons.

For now, though, I just want you to focus on component at Mount and mounting of the component in the

next video.

I'm going to go a little deeper into these three methods that we've seen, which is the constructor

component and mount and the render method because there is an order here that is important when it comes

to how this component is getting added and react, determining when to run the code inside each of these.

So in the next video, we'll cover that so that you can understand deeper how a class component works.

See in the next video.



## 36. Optional: Promises

## 37. Monsters Rolodex - Renders & Re-renders in React

Welcome back, everyone.

So so far, we've learned quite a bit about class components.

We've learned about their constructor call.

We have learned about some of their lifecycle methods component amount specifically.

And we've learned about the render.

So you might be wondering what's the order that these actually get run when React decides to initialize

and mount a component?

So the order I'm going to tell you is that it runs the constructor first because the constructor runs

before anything in any class.

That is, regardless of whether this is React or JavaScript, classes will always run the constructor

function first inside of here.

The only thing you're really going to do with the constructor is initialize the state.

So this is pretty much just saying, Hey, react, there's going to be a state object for this component,

and this is the initial values that it's going to have.

That's all you really need to ever use the constructor for.

The render runs next, and what it does is the render determines what to show.

This you can see kind of as the template of the HTML, so this dictates what the UI for this component

is going to be.

Then the next life cycle that runs is component did Mount, because what happens is that React is like,

OK, I run the constructor of initialize the state, the initial state at the very least, and I am

going to now render the initial UI of this component.

So it's actually going to mount this initial UI onto the Dom.

So what this means is that whatever the initial state of your component is, is what it will mount on.

Then once it mounts, it will run.

The lifecycle method component did mount because our component did just mount.

The moment it mounts, it runs the code inside.

And here we can easily see very quickly if I console log in each space.

So this is one.

This one with the render should be to.

And then inside of this component at Mount, this should be three.

So if we save this, we go back to our application.

We see one two three and then you'll notice that two runs again.

So why did this happen?

Well, let's think about what just happened.

Our constructor runs our stake.

It's initialized, so console.log one yes, we know the constructor runs first, then the render runs

console.log two.

This is the second thing.

The initial rendering and mounting of our component onto the page then component did mount three runs.

And here we are fetching some JSON.

And remember, this is asynchronous, so we actually don't know when this data is going to come back.

Once it comes back, we are going to now update the state.

But the moment that that state updates remember, I told you that the moment state changes and you've

called set state.

React knows, oh, this components different, I need to re render it re render here's the key word,

meaning that we need to run the render again, because the moment you run the render method react is

saying, Oh, let me render onto the page again with this template and inside of this template, the

state dot monsters is now different because as we know, we've updated the state with the appropriate

users, which is why you see the second two logged out.

This is how React is going to work.

Majority of the time with your components by looking at just the order of when the initial render happens

and another render happens once that state gets called.

You now understand pretty much the core of class components and rendering.

This is like 80 percent of what you need to know about class components when it comes to understanding

the rendering cycles.

So the moment that's at stake, it's called the render method gets called again because once the state

is up to date, we want to re render what this components UI is with any new values that may be there,

which we know is probably going to be the case because the state object is different and the render

is simply just going to look through this GSX and say, Oh, I need to look at state dot monsters.

What's the monsters, whatever the new value is?

This is the key thing of understanding, react and really just understanding with class components when

something renders.

And here we explicitly see step by step what that looks like.

Run the constructor, run the initial render when your initial monster's value was an empty array.

Then, once your component mounts fetch, the new users call that state and once again, once the state

gets called Call Render Again and now Monsters is the new updated users list.

This is pretty much the basic flow of rendering and re rendering when it comes to making these basic

API requests.

That's it with a bit more practice.

This will become very familiar.

But this flow, I just want you to understand that constructor runs first, initialize your state,

render your initial component UI.

Then once you need some API, calls to it in the component at Mount lifecycle.

Once that happens, you want to set state to make sure that your component updates.

And once it updates, it's going to call render again to re render the UI.

That's the flow.

We're going to dive deep into a lot more of these concepts, but now you understand very integrally.

One of the hardest things for a lot of people when it comes to understanding react is when things really

render.

But now you've seen a very common flow you're going to encounter over and over again in your react life.

You've understood some of these life cycles.

So this is enough for us to get started with this component.

So let's start actually making this look a little bit more similar to our website, and we'll do that

in the next video.

## 38. Monsters Rolodex - Input Search Box Component

Welcome back, everyone.

Just so that we can keep track of all these things we're learning when it comes to our lifecycle methods

and our class component methods, as well as rendering and rendering.

I know it's a lot of new concepts that we're learning at once, which can be confusing.

So just so that we're aware of the order, as I mentioned before, its can structure, then render then

component did mount and have component did mount updates the state another render?

We're just going to update this console.log text so that it shows us the method so that as we build

out this application, we can see very clearly what's happening, and it's really just for your own

familiarity in case you get confused.

So instead of console.log one, we put constructor instead of console.log.

Three, we put component at Mount and instead of console.log.

Two we put render.

So now that we have this, we go back to our application.

We see that when we refresh.

We'll see that our constructor runs than our render runs component, didn't mount runs, then render

runs and then of course, our monsters array gets logged from our callback in our sets, they call.

So everything here is just to recap now moving forward.

Let's talk about how we're actually going to build out this application, and in order to do that,

we've got to talk a little bit about what we're looking to do.

So as I mentioned before, we have these different ones that represent different monsters.

Now, before we actually start styling these h ones to look more like the final product, what we want

to do instead is actually work on functionality.

You always want to work on functionality of your application before you work on the CSS, because once

you have the functionality and it's easier to start afterwards, at least that's the way that I prefer

to do things.

So in order for us to think about the functionality, let's actually take a look at our final product.

What are we trying to work towards?

So here we have these different monster cards, which represent the different monsters in our H1.

So instead of ones, we have cards.

But as I mentioned, that's the styling.

We're not going to work on that.

Instead, we want to add in this search functionality.

So what does the search functionality do?

Well, let's say that you want to find Clementine Bausch as you type it in.

It will filter out the monsters that do not match in name to what we've typed in here for our strengths.

So seemingly only matches two cards Clementine and Clementina.

In fact, if I type out Clementine, it should get rid of Clementina, but as I remove it, it will

bring back anything that does match.

So this is the functionality that we want to add into our monster's Rolodex project.

Another thing to include is also the fact that if we hit this X, it will also clear the search field

and in turn also bring back all the different monsters that were loaded.

So this is the feature that we want to build in.

Now, before we start coding this right away with any feature we're building, we want to think about

what it is that we need to do, because only then do we get a better clear idea of the requirements

of this feature.

And from there, it's the best way to start moving forward and actually comes the planning out, the

code that we want to write.

So what we need and what we're missing is we need an input field, and with this input field, we need

to be able to insert text, so allow the user to type into it and filter out our monsters.

So let's just think about that.

Given what we have, we clearly don't have the input field, so we know we need an input field somewhere.

So let's start with that.

Inside of this app, I'm going to use an input field, and this is just the same input field that you

have inside of HTML.

But one thing I want to mention is that all of these different HTML like GSX tags that we're writing,

the divs, the ones, the inputs or any single HTML tag that you can typically write inside of Iraq

in this GSX.

It looks like HTML.

But it's a little bit more advanced in that what it is really is that it's pretty much a component that

React has already included into the jazz acts.

So just like the components that we're writing, all of these are also components.

An easy way to think about this is that when you look at this app, this class app we know is a class

component.

We've been writing it and we export this out.

But when you look inside of index tags, what's happening is we are importing this app from Dot app,

so we're importing this whole class component that we're writing.

And what we're doing is we are rendering it right here.

But if you look at this, do you notice that this looks like HMO?

Well, this does.

But again, we're still inside of GSX, and the important thing to notice here is that what is happening

is that this app is being written in GSX like an HTML tag, the exact same way that these divs and this

one and these inputs are as well.

And the reason for this, of course, is the fact that React has created these HTML looking components

for us.

For every HTML tag, there is an equal React component.

And the reason why React does this is because it allows us to bind once again functionality to the UI.

So if you think about this input, what do we want to do with this input?

Because with all of these inputs, we typically have a bunch of HTML properties we can provide it.

In fact, any small property you can think of is equally available on these React HTML components.

One thing, though, that I want you to notice is that some of them are named a little differently.

And we can see this explicitly up here in this div.

We notice that instead of class, it's class name.

And the reason why its class name instead of class is because this is written in Joe's X and J X is

a syntax extension of JavaScript, meaning that all of the rules of JavaScript apply to GSX because

you're really just writing JavaScript with some additional functionality and class.

Being a protected keyword in JavaScript means that classes also protect protected keyword inside of

GSX.

When you think about classes, we use it up here, and what it does is it allows us in JavaScript to

create classes as well as class components.

So for this reason, riot cannot just allow us to use class freely inside of our JavaScript because

there's a very key functionality of JavaScript that's tied to class whenever it appears inside of JavaScript

and equally inside of GSX.

So keeping that in mind, that's why its class name.

So if we wanted to give our input a class, then we have to use class name.

And that's exactly how I'm going to do.

So here I'm going to say the class name is equal to search box.

And what other input properties do we want?

Well, we want to give it a type, so we want to say that the type of this input is going to be search.

We also want a placeholder.

So placeholder is going to be the text that shows up inside of an empty search box.

So before the user types in anything, what do we want to put there?

Usually what this text, you want to put some kind of text that explains what it's going to do.

So I'm just going to say that it's going to be search monsters and that text search monsters is going

to show up in that empty input box when users haven't typed in anything yet.

Finally, now what we want to do is we want to actually code in the functionality in order to filter

down this list.

So how do we do this?

Well, typically with inputs, what happens is that you have a change handler that you can bind to an

input.

So this is an event handler very similar to our button.

If you think back to our button, you remember that earlier we had a button that would change the name

inside of our search field, from Yehovah to Andre, and we used the on click handler.

So here instead, we have a similar handler, but every time the value inside of the search box updates

or changes.

And this is the on change handler.

And just like with on click, you get to pass it a callback and this callback runs whenever the value

inside of this input changes.

So what we want to do is we just want to say, OK, what's going to happen every time it changes?

Well, we want to start filtering out the different monsters that we have available.

And luckily for us, just like with this event handler inside of regular HTML JavaScript with Jeff Sachs,

this is pretty much the same event handler.

So what we're going to get back is we are going to get back an event.

So for those of you unfamiliar, let's just quickly console.log this event.

So we see what we receive.

So coming back into our application, we see that we have our input field.

We see we have our placeholder text search monsters.

And now if we start typing in, if I type L, we see we get this synthetic base event.

This event, if you look closely at one of these properties, has an underscore react name.

So this tells us it's a reactive it because React is in here.

In typical any other events that are generated by your browser or your DOM, you would not see underscore

react name.

And the reason for this is because React is generating these events for us with these different methods

that it provides us in those JavaScript HTML components.

The reason for that is just that it makes it easier for us to do this kind of event handling like this

on change handler.

And the reason why there's an underscore is because these are typically the kinds of properties that

react as these events, but they're not for us to access.

We shouldn't be accessing anything with an underscore.

Generally, everything else, though we do want.

And the main thing that we want is target, because inside of Target, other than all of these other

keys and values that you could use, these are going to be mainly valuable because of this value instead

of value.

Here you see, is the string L, which is what we have typed.

Now, if I continue to type.

E!

In the next event, if I check in the target, what we see is that the value is Ali.

And similarly, if I type another A, we see that we're going to get inside of target and value LGA.

So we know that with this, we're now able to actually get the value.

Now this is going to be my challenge to you.

Knowing that we need to use the event, don't target dot value.

I want you to take this and actually try and filter down this list of monsters.

We've done something very similar already.

We know that we need to use this handler to update our state object or our state array for monsters.

What you have to do is figure out how to use this in order to filter it down and to give you a hint,

there's actually an array method called filter that you can leverage for this.

I'm going to include in the resources folder a link to the filter so that you can take a look at it.

But I want you to try and implement it yourself.

Implement a way where as you type, you will filter out these monsters.

So good luck and we'll do it together in the next video.


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
