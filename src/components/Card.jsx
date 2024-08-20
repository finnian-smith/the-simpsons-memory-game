import PropTypes from "prop-types";
import "../styles/Card.css";

function Card({ card, onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <img src={card.image} alt={card.character} />
        <p>{card.character}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
