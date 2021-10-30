import React from "react";
import cls from "./ItemList.module.css";
import Category from "./Category/Category";

const ItemList = (props) => {
  const categories = props.categories.map((cat, id) => {
    return <Category name={cat.category} items={cat.items} key={id} />;
  });
  return <div className={cls["categories"]}>{categories}</div>;
};

export default ItemList;
