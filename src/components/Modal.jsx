import PropTypes from "prop-types";
import "../styles/Modal.css";

function Modal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.string.isRequired,
};

export default Modal;
