import React, { useState } from "react";
import Card from "../Card";
import { orderedDeck } from "../../constants/index";
import { shuffle } from "../../utils/shuffle";
const ShuffleCards = () => {
  const [deck, setDeck] = useState(orderedDeck);

  return (
    <>
      <button className="shuffle" onClick={() => setDeck(shuffle(deck))}>
        Shuffle the deck
      </button>
      <div className="cardWrapper">
        {deck && deck.map((e, index) => <Card value={e} key={index} />)}
      </div>
    </>
  );
};

export default ShuffleCards;
