import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardContainer from "./components/CardContainer";
import useFetchCards from "./hooks/useFetchCards";
import shuffleArray from "./utils/shuffleArray";
import Modal from "./components/Modal";

function App() {
  const { cards, loading, error } = useFetchCards();
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // shuffle cards
  useEffect(() => {
    setShuffledCards(cards);
  }, [cards]);

  // handle game completion and scoring
  useEffect(() => {
    if (currentScore == 10) {
      setModalMessage(
        `Congratulations! You reached a score of ${currentScore}!`
      );
      setIsModalVisible(true);
      setHighScore(currentScore);
      resetGame();
    }
  }, [currentScore]);

  // handle card clicks
  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setModalMessage(
        `You already clicked this card! Your score is: ${currentScore}`
      );
      setIsModalVisible(true);
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      resetGame();
    } else {
      setClickedCards([...clickedCards, id]);
      setCurrentScore(currentScore + 1);
    }

    setShuffledCards(shuffleArray(cards));
  };

  // reset game state
  const resetGame = () => {
    setCurrentScore(0);
    setClickedCards([]);
  };

  // close modal
  const closeModal = () => {
    setIsModalVisible(false);
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
      {isModalVisible && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
}

export default App;
