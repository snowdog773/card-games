import React from "react";
import { games } from "../constants/games";
const GameWindow = (props) => {
  return (
    <>
      <h2>Choose Your Game</h2>
      <div className="gameGrid">
        {games.map((e, index) => (
          <div
            className="gameTile"
            onClick={() => props.selectGame(e)}
            key={index}
          >
            {e}
          </div>
        ))}
      </div>
    </>
  );
};

export default GameWindow;
