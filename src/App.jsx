import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardContainer from "./components/CardContainer";
import useFetchCards from "./hooks/useFetchCards";
import shuffleArray from "./utils/shuffleArray";

function App() {
  const { cards, loading, error } = useFetchCards();
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    setShuffledCards(cards);
  }, [cards]);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      alert("You already clicked this card!");
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, id]);
      setCurrentScore(currentScore + 1);
    }

    setShuffledCards(shuffleArray(cards));
  };

  return (
    <div className="app">
      <div className="section-a">
        <Header title="The Simpsons Memory Game" />
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      {loading && <p>Loading cards...</p>}
      {error && <p>Error: {error}</p>}
      <CardContainer cards={shuffledCards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
