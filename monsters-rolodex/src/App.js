import { useState } from "react";

// import { Component } from "react";
// import CardList from "./components/card-list/card-list.component";
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
const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  console.log(searchField);

  const onsearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onsearchChange}
        placeholder="search monsters"
      />
      {/* {<CardList monsters={filteredMonsters} />} */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // console.log("constructor 1");
//   }

//   // Lifecycle Methods
//   componentDidMount() {
//     // console.log("componentDidMount 3");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onsearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     /* (Components re-render on two conditions)

//     1. When setState() gets called
//     2. When props are updated

//     This is how react primarily determines, that you
//     want to re-render.

//     */

//     // console.log('render from AppJS');

//     // destructuring
//     const { monsters, searchField } = this.state;
//     const { onsearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onsearchChange}
//           placeholder="search monsters"
//         />
//         {<CardList monsters={filteredMonsters} />}
//       </div>
//     );
//   }
// }

export default App;
