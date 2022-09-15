import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <p
          style={
            props.value.suit === "H" || props.value.suit === "D"
              ? { color: "#ff0000" }
              : { color: "#000000" }
          }
        >
          {props.value.value} of {props.value.suit}
        </p>
      </div>
    </>
  );
};

export default Card;
