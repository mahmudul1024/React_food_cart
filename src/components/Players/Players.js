import React from "react";
import Singleplayer from "../Singleplayer/Singleplayer";

const Players = ({ players, cart, setCart, locals, setLocals }) => {
  return (
    <div className="card_align">
      {players?.map((elemnt) => (
        <Singleplayer
          player={elemnt}
          key={elemnt.idMeal}
          cart={cart}
          setCart={setCart}
          locals={locals}
          setLocals={setLocals}
        ></Singleplayer>
      ))}
    </div>
  );
};

export default Players;
