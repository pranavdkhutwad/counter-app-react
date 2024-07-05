import "./Image.css";

function Image({ img, alt }) {
  return <img className="product-img" src={img} alt={alt} />;
}

export default Image;
