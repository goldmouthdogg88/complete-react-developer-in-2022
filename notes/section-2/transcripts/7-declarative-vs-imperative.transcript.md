Now the success of React comes down to four key things.
And these React concepts are we going to go over in the next four videos.

But in this one let's talk about the first one and the first one React says: hey don't touch the DOM

I'll do it.

What do I mean by this?

You see, many existing frameworks and libraries before React where directly manipulating this Dom on

every page.

First let's just go over what a Dom is. If you remember Dom is our Document Object Model.

It's what the browser uses to display a Web Site or a web app, and Javascript is simply manipulating

this Dom.

That's all javascript is doing.

For example if I right **click** over here and select Inspect and you'll see that here if I click on

un vote we'll get a little flash saying that hey javascript just updated this.

If I click again, again I get a little flash. The DOM is just the tree representation of the page.

We start all the way up from the HTML tag all the way down to the body through each individual elements

and Web sites were built using things like this all these ways that browsers allowed us to manipulate

the DOM.

They gave us the DOM API that we could access using something like innerHTML or get element by I.D.

get elements by tag name this API allowed us to traverse the DOM access any node we wanted to maybe

remove them add new nodes and before React.

This is what libraries did you either did this manually or you used jQuery or you use some sort of

a library that allows you to use this in a simple fashion you see this way of programming was called

imperative: that is in an imperative paradigm you directly change individual parts of your app in response

to various user events. so you had let's say your javascript file you'd say: hey if user is logged in.

Well then go change that little icon over here to the user's profile.

And now that the user is logged in, well, also show profile page.

OK so javascript goes changes the Dom and updates the profile page and then OK.

Now that we have we're also logged in.

We also need to display friends.

OK.

Let's do that as well modify the Dom and.

All right.

That's good we're good.

Oh by the way it's been five seconds and we need to display a chat over here.

OK.

I'm going to go and do that now.

This sounds intuitive but the problem with this imperative approach is that it becomes difficult to

see the relationships between events and all these edge cases.

Remember this diagram over here where we had AngularJS that all of a sudden had all these relationships

affecting each other and all these errors pointing to different things. Well, instead of this imperative

approach React came up with a novel concept a more declarative approach and this is what React says to

you.

Hey Dom manipulation is one of the biggest performance bottlenecks.

It takes a long time for Dom changes to happen.

The browser has to do two really intensive operations.

One is to repaint.

That is change an element and added onto a page and then refloat which is to recalculate the layout

of the page and move things around if need be.

So changing the Dom was a really expensive operation.

So React says: hey you know what.

Let me take care that I'll find the best way for me to change the Dom and just declare to me what your

app looks like.

So all we need to do is say hey this is a javascript object of how I want the app to look and React

is going to hold this javascript object this massive massive blueprint of how things should look.

And based on this blueprint that we give it React just says hey just tell me what the page should

look like and I'll take care of it.

I'll do everything for you.

I'll find the best way to use the DOM.

You're never going to touch the DOM.

Just tell me what the page should look like.

This declarative paradigm is called that because we declare that hey this is what the state or data

of our app should be ==like==.

And based on this date.

Well then just make those changes.

So if a user is logged in then React already knows exactly what to update and what to do.

Now this idea of a declarative style meant that we didn't have to directly say do this and if this happens

then do that where we just say one by one exactly what should happen.

Instead we tell it this is the state of our app and React automatically just does it for us.

The difference is that all the different states are accounted for in one place.

That is one big javascript object that describes how our app should look.

And this resulted in less complexity better code quality and faster developer times.

So it created this whole idea of: hey you can build web interfaces without touching the Dom and this

is where the name React came from. The name React is simply saying hey based on whatever the state or

data of the app is that describes our app, I'm just going to React to it and change everything for you

so that you get the display that you want.
