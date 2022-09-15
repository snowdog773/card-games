import React from "react";
import { ReactComponent as Clubs } from "../assets/club.svg";
import { ReactComponent as Spades } from "../assets/spade.svg";
import { ReactComponent as Hearts } from "../assets/heart.svg";
import { ReactComponent as Diamonds } from "../assets/diamond.svg";
const Card = (props) => {
  let suit;
  props.value.suit === "H"
    ? (suit = <Hearts />)
    : props.value.suit === "D"
    ? (suit = <Diamonds />)
    : props.value.suit === "C"
    ? (suit = <Clubs />)
    : (suit = <Spades />);
  let value;
  props.value.value === 14
    ? (value = "A")
    : props.value.value === 13
    ? (value = "K")
    : props.value.value === 12
    ? (value = "Q")
    : props.value.value === 11
    ? (value = "J")
    : (value = props.value.value);

  return (
    <>
      <div className="card">
        <p
          className="cardTopLeft"
          style={
            props.value.suit === "H" || props.value.suit === "D"
              ? { color: "#ff0000" }
              : { color: "#000000" }
          }
        >
          {value} {suit}
        </p>
      </div>
    </>
  );
};

export default Card;
