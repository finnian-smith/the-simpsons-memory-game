import PropTypes from "prop-types";
import "../styles/Scoreboard.css";

function Scoreboard({ currentScore, highScore }) {
  return (
    <>
      <div className="scoreboard">
        <div className="current-score">
          <p className="score-type">Current Score</p>
          <p className="score">{currentScore}</p>
        </div>
        <div className="high-score">
          <p className="score-type">High Score</p>
          <p className="score">{highScore}</p>
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
