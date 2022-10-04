import React from "react";
import "./Singleplayer.css";

const Singleplayer = ({ player, cart, setCart, locals, setLocals }) => {
  const { strMeal, idMeal } = player;
  const handleCart = () => {
    const info = {
      strMeal,
      idMeal,
    };
    if (cart.length) {
      const isExist = cart.find((e) => e.idMeal === idMeal);
      if (isExist) {
        setCart([...cart]);
        return;
      } else {
        setCart([...cart, info]);
        return;
      }
    } else {
      setCart([info]);
    }
  };
  console.log(player);

  const bookmarkHandler = () => {
    const info = {
      strMeal,
      idMeal,
    };

    const localitems = localStorage.getItem("bookmark");
    const objectified_locals = JSON.parse(localitems);

    if (objectified_locals) {
      const newlaocals = objectified_locals;
      const isLocalExist = objectified_locals.find((e) => e.idMeal === idMeal);
      if (isLocalExist) {
        localStorage.setItem("bookmark", JSON.stringify([...newlaocals]));
        setLocals(objectified_locals);
        return;
      } else {
        localStorage.setItem("bookmark", JSON.stringify([...newlaocals, info]));
        setLocals(objectified_locals);
        return;
      }
    } else {
      localStorage.setItem("bookmark", JSON.stringify([info]));
      setLocals([info]);
    }
  };
  return (
    <div className="single_cart">
      <img className="cart_img" src={player.strMealThumb} alt="" />
      <h3>{player.strMeal}</h3>
      <button className="card_btn">Details</button>
      <button onClick={handleCart} className="card_btn">
        Add to Cart
      </button>
      <button onClick={() => bookmarkHandler()} className="card_btn">
        Bookmark
      </button>
    </div>
  );
};

export default Singleplayer;
