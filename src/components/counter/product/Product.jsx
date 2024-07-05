import { useEffect } from "react";
import Badge from "../../badge/Badge";
import Button from "../../button/Button";
import Image from "../../image/Image";
import PropTypes from "prop-types";

import "./Product.css";

function Product({ product, onIncrement, onDecrement, onDelete }) {
  const { count, img, alt } = product;
  useEffect(() => {
    console.log("component did mount");
    console.log("API calls");

    // component will Unmount
    return () => {
      console.log("clean up activity");
      console.log("component is about to destroy");
    };
  }, []);

  useEffect(() => {
    console.log("component did update");
    console.log("when product updates");
  }, [product]);
  return (
    <section className="product">
      <Badge count={count} />
      <Image img={img} alt={alt} />
      <Button onClick={() => onDecrement(product.id)} colorClass="btn-danger">
        -
      </Button>
      <Button onClick={() => onIncrement(product.id)} colorClass="btn-success">
        +
      </Button>
      <Button onClick={() => onDelete(product.id)} colorClass="btn-danger">
        Delete
      </Button>
    </section>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Product;
