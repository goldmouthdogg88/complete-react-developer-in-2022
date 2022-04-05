import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => {
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

export default Card;
