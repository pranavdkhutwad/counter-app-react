import { useState } from "react";
import Product from "./product/Product";
import Total from "./total/Total";

// How to define state in FC
// For FC react has given Hook (React Hooks)
// To define a state React has given useState hook
// Hook: Hook is a special function which returns any value.

function Counter() {
  const [products, setProducts] = useState([
    {
      id: 1,
      count: 0,
      img: "https://plus.unsplash.com/premium_photo-1683134274095-22a2d27c6d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      alt: "home",
    },
  ]);

  const handleIncrement = (id) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((product) => product.id === id);
    const newProduct = { ...newProducts[index] };
    newProduct.count = newProduct.count + 1;
    newProducts[index] = newProduct;

    setProducts(newProducts);
  };

  const handleDecrement = (id) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((product) => product.id === id);
    const newProduct = { ...newProducts[index] };
    if (newProduct.count) {
      newProduct.count = newProduct.count - 1;
      newProducts[index] = newProduct;

      setProducts(newProducts);
    }
  };

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);

    setProducts(newProducts);
  };

  const getTotal = () => {
    return products.reduce((acc, product) => {
      acc = acc + product.count;

      return acc;
    }, 0);
  };
  return (
    <section>
      <Total total={getTotal()} />
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export default Counter;
