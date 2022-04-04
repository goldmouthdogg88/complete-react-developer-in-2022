import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
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
            const searchString = event.target.value.toLocaleLowerCase();
            // [ { name: 'Leanne'}, {name: 'Yihua'}]
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString);
            });
            this.setState(() => {
              return { filteredMonsters: filteredMonsters };
            });
          }}
        />
        {this.state.filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
