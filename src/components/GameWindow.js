import React from "react";
import ShuffleCards from "./games/ShuffleCards";
import HighLow from "./games/HighLow";
import TwentyOne from "./games/TwentyOne";
const GameWindow = (props) => {
  return (
    <>
      {props.gameFragment === "Shuffle Deck" && <ShuffleCards />}
      {props.gameFragment === "High or Low" && <HighLow />}
      {props.gameFragment === "21" && <TwentyOne />}
    </>
  );
};

export default GameWindow;
