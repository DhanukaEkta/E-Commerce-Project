import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [item, setItem] = useState([]);
  // const [cart, setCart] = useState({});

  useEffect(() => {
    const endPoint = "https://dummyjson.com/products";
    axios.get(endPoint).then((response) => {
      const apipData = response.data;
      setItem(apipData.products);
    });
  }, [setItem]);

//   const addItemToCart = (id) => {
//     if (cart[id]) {
//       cart[id] += 1;
//     } else {
//       cart[id] = 1;
//     }
//   };
//   const removeItemFromCart = (id) => {
//     if(cart[id]===1)
//     {
// delete cart[id];
//     }
//     else{
//       cart[id] -= 1;
//     }
  // };

  return (
    <div className="shop">
      <div className="shopTitle">
        <div>
          <p>Access to all the Electronic Gadgets!</p>
        </div>
        <h1>Shop Now!</h1>
      </div>
      <h1>Our Products</h1>
      <div className="products">
        {item.map((product) => (
          // <Product item={product} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} cart={cart} />
          <Product item={product} />
        ))}
      </div>
    </div>
  );
};
