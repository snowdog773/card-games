import React from "react";
import ShuffleCards from "./games/ShuffleCards";
import HighLow from "./games/HighLow";
const GameWindow = (props) => {
  return (
    <>
      {props.gameFragment === "Shuffle Deck" && <ShuffleCards />}
      {props.gameFragment === "High or Low" && <HighLow />}
    </>
  );
};

export default GameWindow;
