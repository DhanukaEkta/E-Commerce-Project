import React, {  useEffect, useState,useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = props.item;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  
  

  return (
    <div className="product">
      <img src={images[0]} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> ${price}</p>
      </div>

      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

