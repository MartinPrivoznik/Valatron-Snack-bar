import React from "react";
import cls from "./ItemList.module.css";
import Category from "./Category/Category";

const ItemList = (props) => {
  const categories = props.categories.map((cat, id) => {
    const categoryItems = props.stock.filter((st) => {
      if (st.categoryId === id) return true;
      else return false;
    });
    return <Category name={cat.category} items={categoryItems} key={id} itemHandleClick={props.itemHandleClick} />;
  });
  return <div className={cls["categories"]}>{categories}</div>;
};

export default ItemList;
