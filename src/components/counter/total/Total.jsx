import "./Total.css";
import PropTypes from "prop-types";

function Total({ total }) {
  return <section className="total-container">Total: {total}</section>;
}

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
