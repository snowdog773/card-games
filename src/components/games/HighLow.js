import React, { useState, useMemo } from "react";
import Card from "../Card";
import { orderedDeck } from "../../constants/index";
import { shuffle } from "../../utils/shuffle";
const HighLow = () => {
  const [deck, setDeck] = useState(shuffle(orderedDeck));
  const [turn, setTurn] = useState();
  const [started, setStarted] = useState(false);
  const [cardsTurned, setCardsTurned] = useState();
  const [score, setScore] = useState(0);
  const [fail, setFail] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useMemo(() => score > highScore && setHighScore(score), [score, highScore]);

  const startGame = () => {
    // setDeck(shuffle(deck));
    setTurn(2);
    setStarted(true);
    setCardsTurned([deck[0]]);
  };

  const cardCheck = (e) => {
    const liveDeck = [...deck];
    liveDeck.splice(turn, 52 - turn);
    setCardsTurned([...liveDeck]);

    e === "high" && liveDeck[turn - 1].value > liveDeck[turn - 2].value
      ? setScore((score) => score + 1)
      : e === "low" && liveDeck[turn - 1].value < liveDeck[turn - 2].value
      ? setScore((score) => score + 1)
      : setFail(true);
    setTurn(turn + 1);
  };

  const restart = () => {
    const newDeck = shuffle(orderedDeck);
    setDeck(newDeck);
    setFail(false);
    setStarted(true);
    setScore(0);
    setCardsTurned([newDeck[0]]);
    setTurn(2);
  };

  return (
    <>
      <p>Welcome to higher or lower. Aces are high!</p>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
      {fail && <p>YOU LOSE</p>}
      {!started && (
        <button className="startGame" onClick={() => startGame()}>
          Start Game
        </button>
      )}
      <div className="cardWrapper">
        {cardsTurned &&
          cardsTurned.map((e, index) => <Card value={e} key={index} />)}
      </div>
      {!fail && started && (
        <div className="gameButtons">
          {" "}
          <button onClick={() => cardCheck("high")}>Higher</button>
          <button onClick={() => cardCheck("low")}>Lower</button>
        </div>
      )}
      {fail && <button onClick={() => restart()}>Restart</button>}
    </>
  );
};

export default HighLow;
