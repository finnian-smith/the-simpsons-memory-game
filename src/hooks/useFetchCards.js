import { useState, useEffect } from "react";
import { fetchSimpsonsCards } from "../api";

const useFetchCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const cardData = await fetchSimpsonsCards();
        if (isMounted) {
          setCards(cardData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { cards, loading, error };
};

export default useFetchCards;
