import React, { useState } from "react";
import cls from "./App.module.css";
import "@duik/it/dist/styles.css";
import ItemList from "./ItemList/ItemList";
import Basket from "./Basket/Basket";
import Stock from "../constants/stock";

const App = () => {
  const [stock, setStock] = useState(Stock);

  return (
    <div className={cls["app"]}>
      <div className={cls["head"]}>
        <div className={cls["logo"]} />
        <h1>Snack bar</h1>
        <p>Aneb ukázka Inventi, že sme lepší a nepotřebujem je</p>
      </div>
      <div className={cls["shop"]}>
        <ItemList categories={stock} />
        <Basket />
      </div>
    </div>
  );
};

export default App;
