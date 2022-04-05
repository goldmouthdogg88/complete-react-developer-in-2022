import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render from CardList");

    // console.log(this.props);

    // destructuring: The reason we do this
    // is if we need to use the variable(s) from
    // state or props in more than one place
    // its just easier.

    const { monsters } = this.props;

    // Components will re-render when props changes

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
