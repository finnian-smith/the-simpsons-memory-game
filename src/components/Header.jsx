import PropTypes from "prop-types";
import "../styles/Header.css";

function Header({ title }) {
  return (
    <>
      <header className="header-section">
        <h1 className="header-title">{title}</h1>
        <p className="header-instructions">
          Score points by clicking on each unique card, but avoid clicking the
          same card more than once!
        </p>
        <p>The maximum score is 10.</p>
      </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
