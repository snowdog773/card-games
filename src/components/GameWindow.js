import React from "react";
import ShuffleCards from "./ShuffleCards";
const GameWindow = (props) => {
  return <>{props.gameFragment === "shuffle" && <ShuffleCards />}</>;
};

export default GameWindow;
