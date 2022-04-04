import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log("constructor 1");
  }

  // Lifecycle Methods
  componentDidMount() {
    console.log("componentDidMount 3");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render 2");
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            // console.log(event.target.value);
            let userInput, monsters, monsterNames, filterResults;
            userInput = event.target.value;
            monsters = this.state["monsters"];

            monsterNames = monsters.map((x) => x.name);
            filterResults = monsterNames.filter((names) =>
              names.includes(userInput)
            );
            console.log(filterResults);
          }}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
