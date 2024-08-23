import PropTypes from "prop-types";
import Card from "./Card";
import "../styles/CardContainer.css";

function CardContainer({ cards, onCardClick }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => onCardClick(card.id)} />
      ))}
    </div>
  );
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default CardContainer;
