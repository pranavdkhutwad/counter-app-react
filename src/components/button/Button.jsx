import "./Button.css";
import PropTypes from "prop-types";

function Button({ children, colorClass, onClick }) {
  return (
    <button onClick={onClick} className={`btn ${colorClass}`} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  colorClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
