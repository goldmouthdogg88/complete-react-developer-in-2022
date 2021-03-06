Now, that came out in 2013, but what do we have before then, before react?

Well, the front end landscape was very different.

Initially back in the 90s and early 2000s, we just had basic HMO access and JavaScript HTML displayed

the text on our Web pages, CSFs, the styles and JavaScript allows us to have some interactivity in

a website.

And initially it just started with simple forms where we send from the back end.

When we go to a URL, all these files and when a user, lets say, submits a form, we simply send that

back to the server to store that information.

Now, if a user clicked on, let's say, a link in the page, well, once again, we simply request

the new HTML file and the new page from the server and that gets sent to the front end.

And that's how websites worked for many years.

But there's a problem here, you see all these websites where they run on different browsers and all

these browsers where worked on by different group of developers, so each one of these browsers implemented

while their browser differently.

So what happened was, as we wanted to use more and more JavaScript in our Web pages, we had to account

for all these browsers that sometimes worked differently from each other and we had to accommodate JavaScript

to work with these different browsers.

Now, eventually, we had Jaquie come out, which allowed developers to easily interact with the DOM

or the document object model across all these browsers you see back in the day, if we went to, let's

say, hacker news over here, clicked on views, developer and then developer tools, and we went to

elements here.

This is the Dom.

The Dom that well, is our page.

It displays exactly how our page should look like.

And it's a tree like structure.

And JavaScript, all it does is modify this dump, you can remove elements, you can update elements,

and although there's now more similarities and compatibility across different browsers, back in the

day we didn't have that.

So Jaquie made developers happy because it had a unified, easy API that kind of look like this instead

of a developer trying to think about how to work with the DOM in each of the different browsers.

The jury said, hey, we'll take care of that complexity for you.

Just this is a syntax we'll use that works across all browsers.

And you can manipulate the front end or the DOM however you want.

So that was great.

But would this power developers started building bigger and bigger applications instead of just something

small, we started getting these massive, massive applications like Facebook where you got to log in,

look at the news feed message friends.

And as websites turn into these full applications that people can interact with, besides just requesting

more and more pages like a blog.

Well, libraries like Backbone just came out because, well, our JavaScript files started getting bigger

and bigger and bigger.

Libraries like Backboned allowed us to organize these JavaScript files.

And because it became easier and easier to work with the DOM, we had the birth of a single page application.

You see, traditionally we just had e-mail files for each page and every time we moved to a different

page, we would request from the server, well, the email file, the access file and the JavaScript

file, which usually contains Jaquie for each time we clicked on a link.

But with more advancement like we had with Jaquie Backbone and something called Ajax, we now had a

different system.

What generally happened now is we focus less on HTML and a lot more in JavaScript.

You only load the application code once.

Instead of us making new requests to the server.

Where we returned a new document instead, now our applications acted more like a desktop application,

where we stay on the same page the entire time and the JavaScript file simply changes or updates the

e-mail file or the DOM to display new things.

So you were able to sign into an application and interact with that application without ever speaking

to the server anymore.

And this way of writing applications or single page applications became really, really popular, and

in 2010, Angela J.S., which was created by Google, really became the standard way of building applications

this way.

Now, unlike JQuery, Angular allowed developers to build these large applications by forming these

containers that well wrapped your project, and because it was created by Google, it had a lot of power

because people said, well, this is the way that we should build things.

Everything's organized.

We have these large JavaScript files, but we can organize them this way.

You had code now that now had better containers where you had things like controllers views and models,

and this idea of a model view controller where each part of the application or each JavaScript file

was divided into different things that it did.

This idea of organizing our large code so they're easier to work with as teams get larger and larger,

really made angular JS popular, but there was a problem, you see, things started getting more and

more complex because of this.

As things get bigger and bigger, more things have to happen.

Users are clicking on this button, which changes this area, which in turn changes this area, which

now has to display this information.

We have more and more complexity, you know, and although frameworks like Angular JS came out, people

started to notice, it's getting harder and harder to find bugs in the code and understand how each

part of the app was affecting the other.

Meanwhile, Facebook developers were finding it hard as well on their end to maintain their app, especially

their Facebook ads.

You see, the Facebook ads app got more and more features.

More and more people were added to the team.

Now the growing number of lines of code, the growing number of people working on the app, their app

became really, really difficult to handle.

And each update would cause more and more issues where you had all these arrows relating to each other,

pointing to each other.

And after a while, the engineers of Facebook just couldn't keep up with the way that they had created

this app.

They needed to upgrade their code base.

And this isn't just special in the front end world.

This is all over programming.

It's why we need good architecture.

We need to think about how we organize our code, how we manipulate data, and how that data flows through

our programs.

So Facebook came up with a solution and that solution worked really, really well for them, that in

2013 they released react to the developer community at discomfit twenty thirteen.

And their solution was really, really good.

And it took off because react devolved a whole new way to build front end applications.

Now, it also happened that in 2014, angular JS realized that the way that they've architected their

framework just didn't allow good applications to be built anymore.

So they decided in 2014 that they're going to rewrite the entire library, call it angular, but because

they wanted to do an entire rewrite, a lot of people during that time move to react.

So combined with the fact that Angular JS was getting a complete new rewrite, Facebook was backing

react and the great principals that React introduced made it what it is today.

That is, it became the most popular and tool with the most job demand across the world and being used

by very large companies like Airbnb, Uber, Netflix, Twitter, Reddit, Pinterest, Wick's PayPal

stripe, Tumblr, Walmart.

However, what made react so great?

What were these principles that made it jump from something that Facebook used to, something that developers

all over the world use?

Let's find out in the next video.

