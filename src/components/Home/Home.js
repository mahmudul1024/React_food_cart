import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [players, setplayers] = useState([]);
  const [cart, setCart] = useState([]);
  const [locals, setLocals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((show) => setplayers(show.meals));
  }, [search]);
  console.log("cart ekhane", cart);

  const deleteHandler = (id) => {
    const remainings_cart = cart.filter((e) => e.idMeal !== id);
    setCart(remainings_cart);
  };

  return (
    <div className="main_div">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="search_field"
        type="search"
        name=""
        id=""
      />
      <button className="btn_search">search</button>
      <div className="home_container">
        <div className="left_home">
          <Players
            players={players}
            cart={cart}
            setCart={setCart}
            locals={locals}
            setLocals={setLocals}
          ></Players>
        </div>
        <div className="right_home">
          <h2>Cart list</h2>

          {cart.map((e) => (
            <div className="flexing">
              <p>{e.strMeal}</p>
              <p className="space_list">{e.idMeal}</p>
              <button
                onClick={() => deleteHandler(e.idMeal)}
                className="delete_btn"
              >
                X
              </button>
            </div>
          ))}

          <h2>Local storage list</h2>

          {locals.map((e) => (
            <div className="flexing">
              <p>{e.strMeal}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
