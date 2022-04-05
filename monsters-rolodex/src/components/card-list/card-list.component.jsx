import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render");

    // console.log(this.props);

    // destructuring: The reason we do this
    // is if we need to use the variable(s) from
    // state or props in more than one place
    // its just easier.

    const { monsters } = this.props;

    return monsters.map((monster) => {
      return <h1 key={monster.id}>{monster.name}</h1>;
    });
  }
}

export default CardList;
