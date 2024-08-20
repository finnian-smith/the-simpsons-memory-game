import PropTypes from "prop-types";
import "../styles/Scoreboard.css";

function Scoreboard({ currentScore, highScore }) {
  return (
    <>
      <div className="scoreboard">
        <div className="current-score">
          <p>Current Score</p>
          <p>{currentScore}</p>
        </div>
        <div className="high-score">
          <p>High Score</p>
          <p>{highScore}</p>
        </div>
      </div>
    </>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default Scoreboard;
