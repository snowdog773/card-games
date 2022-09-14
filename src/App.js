import React, { useState } from "react";
import GameWindow from "./components/GameWindow";
import GameList from "./components/GameList";
import "./styles/style.css";

const App = () => {
  const [gameActive, setGameActive] = useState(false);
  const [gameFragment, setGameFragment] = useState();

  const selectGame = (game) => {
    setGameActive(true);
    setGameFragment(game);
  };

  return (
    <>
      <header>
        <h1>Casino Games</h1>
      </header>
      <div className="body">
        {!gameActive && <GameList selectGame={selectGame} />}
        {gameActive && (
          <GameWindow selectGame={selectGame} gameFragment={gameFragment} />
        )}
      </div>
    </>
  );
};

export default App;
