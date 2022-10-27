import React, { useState } from "react";
import GameWindow from "./components/GameWindow";
import GameList from "./components/GameList";
import "./styles/style.css";

const App = () => {
  const [gameActive, setGameActive] = useState(false); //is there a game active?
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
      {/* If no game active show Gamelist, if game active show GameWindow */}
        {!gameActive && <GameList selectGame={selectGame} />}  
        {gameActive && (
          <GameWindow selectGame={selectGame} gameFragment={gameFragment} />
        )}
      </div>
    </>
  );
};

export default App;
