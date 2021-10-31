import React from "react";
import cls from "./Category.module.css";
import Item from "./Item/Item";

const Category = (props) => {
  const stock = props.items.map((item) => {
    return <Item name={item.name} prize={item.prize} icon={item.icon} id={item.id} key={item.id} itemHandleClick={props.itemHandleClick} />;
  });
  return (
    <div className={cls["category"]}>
      <h2> {props.name} </h2>
      <div className={cls["items"]}>{stock}</div>
    </div>
  );
};

export default Category;
