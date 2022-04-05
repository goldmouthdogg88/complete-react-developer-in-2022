// I'm trying to add the folders
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor 1");
  }

  // Lifecycle Methods
  componentDidMount() {
    // console.log("componentDidMount 3");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onsearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    /* (Components re-render on two conditions)

    1. When setState() gets called
    2. When props are updated

    This is how react primarily determines, that you
    want to re-render. 


    */

    // console.log('render from AppJS');

    // destructuring
    const { monsters, searchField } = this.state;
    const { onsearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/* <SearchBox search={onsearchChange} /> */}
        <SearchBox
          onChangeHandler={onsearchChange}
          placeholder="search monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
