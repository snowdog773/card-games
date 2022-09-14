import React, { useState } from "react";
import { orderedDeck } from "../constants";
import { shuffle } from "../utils/shuffle";
const ShuffleCards = () => {
  const [deck, setDeck] = useState(orderedDeck);

  return (
    <>
      <p>THE GAME</p>
      <button onClick={() => setDeck(shuffle(deck))}>Shuffle the deck</button>
      {deck &&
        deck.map((e, index) => (
          <p>
            {e.value} of {e.suit}
          </p>
        ))}
    </>
  );
};

export default ShuffleCards;
