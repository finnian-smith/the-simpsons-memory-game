import { useState, useEffect } from "react";
import { fetchSimpsonsCards } from "../api";

const useFetchCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardData = await fetchSimpsonsCards();
        setCards(cardData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cards, loading, error };
};

export default useFetchCards;
