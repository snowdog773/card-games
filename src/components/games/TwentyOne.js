import React, { useMemo, useState } from "react";
import Card from "../Card";
import { orderedDeck } from "../../constants/index";
import { shuffle } from "../../utils/shuffle";

import "../../styles/twentyOne.css";

const TwentyOne = () => {
  const [started, setStarted] = useState(false);
  const [deck, setDeck] = useState(shuffle(orderedDeck));
  const [playerHand, setPlayerHand] = useState([]);
  const [aiHand, setAiHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [playerScoreArray, setPlayerScoreArray] = useState([]);
  const [aiScoreArray, setAiScoreArray] = useState([]);
  const [deckPosition, setDeckPosition] = useState(4);

  useMemo(() => {
    setPlayerScoreArray(
      playerHand.map((e) =>
        e.value === 14
          ? 11
          : e.value === 13 || e.value === 12 || e.value === 11
          ? 10
          : e.value
      )
    );
    console.log(playerHand);
  }, [playerHand]);

  useMemo(
    () =>
      setPlayerScore(
        playerScoreArray[0] && playerScoreArray.reduce((a, b) => a + b)
      ),
    [playerScoreArray]
  );

  useMemo(
    () => setAiScore(aiScoreArray[0] && aiScoreArray.reduce((a, b) => a + b)),
    [aiScoreArray]
  );

  useMemo(
    () =>
      setAiScoreArray(
        aiHand.map((e) =>
          e.value === 14
            ? 11
            : e.value === 13 || e.value === 12 || e.value === 11
            ? 10
            : e.value
        )
      ),
    [aiHand]
  );

  const initialiseGame = () => {
    setStarted(true);
    setPlayerHand([deck[0], deck[1]]);
    setAiHand([deck[2], deck[3]]);
  };

  const playerTwist = () => {
    console.log("the player twisted");

    setPlayerHand([...playerHand, deck[deckPosition]]);
    setDeckPosition(deckPosition + 1);
  };
  const playerStick = () => {
    console.log("the player stuck");
  };
  const playerSplit = () => {
    console.log("the player split");
  };
  return (
    <>
      <h2>Welcome to 21</h2>

      {!started && <button onClick={() => initialiseGame()}>Start Game</button>}
      {started && (
        <div className="gamePlay">
          <div className="handWrapper">
            <h3>Player Hand</h3>
            <p>Score {playerScore}</p>
            <div className="cardWrapper">
              {playerHand.map((e, index) => (
                <Card value={e} key={index} />
              ))}
            </div>
            <button className="twistButton" onClick={() => playerTwist()}>
              Twist
            </button>
            <button className="stickButton" onClick={() => playerStick()}>
              Stick
            </button>
            <button className="splitButton" onClick={() => playerSplit()}>
              Split
            </button>
          </div>
          <div className="handWrapper">
            <h3>Computer Hand</h3>
            <p>Score {aiScore}</p>
            <div className="cardWrapper">
              {aiHand.map((e, index) => (
                <Card value={e} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TwentyOne;
