import React from "react";
const GameWindow = (props) => {
  return (
    <>
      <h2>Choose Your Game</h2>
      <div className="gameGrid">
        <div className="gameTile" onClick={() => props.selectGame("shuffle")}>
          Shuffle Deck
        </div>
        <div className="gameTile">Shuffle Deck</div>
        <div className="gameTile">Shuffle Deck</div>
        <div className="gameTile">Shuffle Deck</div>
        <div className="gameTile">Shuffle Deck</div>
      </div>
    </>
  );
};

export default GameWindow;
