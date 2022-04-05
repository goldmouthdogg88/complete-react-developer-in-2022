import { useState, useEffect } from "react";

// import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// import logo from "./logo.svg";
import "./App.css";

// Functional Components typ takes the form of an arrow function
/*
  there's no consturctor, because tis related to classes, a functional component
  behaves as a regular JavaScript function. A React functional component takes arugments
  that are the props of this component, then it returns JSX.

  There are no lifecycles when it comes to functional components

  think of functional components in terms of functions and side-effects.
  
  What are side-effects? We need to understand pure functions and impure functions
  in order to replicate all the behavior we had in class components, state, setState
  and lifecycle methods.
*/

/*
  useState: gives us the ability to encapsulate local state in a functional component

  array destructuring allows us to assign variables values inside of an array.
  useState gives us back an array of two values. The first value is the value we want to store
  and the second value is a setter function.

  If you have multiple values in a state, then you need multiple useState calls, each
  hook only hooks into one value.

 */

/*
    To stop the infinite fetching, we have to use side effects, within our functional components.
    Side effects can be generated from functional components using the useEffect hook. A side effect
    is some behavior that we trigger from our functions that affects something that outside exists
    out side the scope of the function. 

    Its either that we modify or rely on some value that exists outside of what's within scope of our
    functional component. Any fetch call is a side effect.
  */

/*
      functional components, anytime it render or re-renders runs the code from top to bottom.
      if you're stuck in a render loop. Think of all the steps with re-rendering, think about the
      fact the function runs from top to bottom. Look at the variables in your state. Are they different
      variables or are they the same variables?
    */

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  console.log("render");

  /*
    The useEffect hook takes two arguments. The first is a callback function, and the second
    argument is going to be an array of dependencies. 

    callback: is going to be the code or effect that we want to happen in our functional component
    secondarray: contains dependencies, mostly likely going to be state values i.e. [searchField or monsters]
    in the context of this application or prop values. Which will be arguments that get passed in as props
    to our functional component. 


    What this array says "Whenever any of the values inside of this dependency array change is when I'm going
    to run this function, this callback function."

    & If we only want to call the useEffect callback once we pass it an empty array. Which is on mount.

  */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);

    console.log("effect is firing");
  }, [monsters, searchField]);

  const onsearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // console.log(filteredMonsters);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onsearchChange}
        placeholder="search monsters"
      />

      {<CardList monsters={filteredMonsters} />}
    </div>
  );
};

export default App;
