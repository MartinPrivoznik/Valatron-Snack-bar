import React, { useState, useEffect } from "react";
import cls from "./App.module.css";
import "@duik/it/dist/styles.css";
import ItemList from "./ItemList/ItemList";
import Cart from "./Cart/Cart";
import Stock from "../constants/stock";

const App = () => {
  const [categories, setCategories] = useState(
    Stock.map((st, id) => {
      return {
        category: st.category,
        id: id
      };
    })
  );
  const [stock, setStock] = useState(() => {
    let items = [];
    let itemCount = 0;
    Stock.forEach((st, id) => {
      st.items.forEach((item) => {
        items.push({ ...item, count: 0, categoryId: id, id: itemCount });
        itemCount++;
      });
    });
    return items;
  });

  const itemHandleClick = (itemId, addToBasket) => {
    //AddToBasket - true if adding, false is removing
    setStock(
      stock.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: addToBasket ? ++item.count : --item.count };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className={cls["app"]}>
      <div className={cls["head"]}>
        <div className={cls["logo"]} />
        <h1>Snack bar</h1>
        <p>Aneb ukázka Inventi, že sme lepší a nepotřebujem je</p>
      </div>
      <div className={cls["shop"]}>
        <ItemList categories={categories} stock={stock} itemHandleClick={itemHandleClick} />
        <Cart stock={stock} itemHandleClick={itemHandleClick} />
      </div>
    </div>
  );
};

export default App;
