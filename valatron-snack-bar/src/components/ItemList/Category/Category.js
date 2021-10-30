import React from "react";
import cls from "./Category.module.css";
import Item from "./Item/Item";

const Category = (props) => {
  const stock = props.items.map((item, id) => {
    return <Item name={item.name} prize={item.prize} icon={item.icon} key={id} />;
  });
  return (
    <div className={cls["category"]}>
      <h2> {props.name} </h2>
      <div className={cls["items"]}>{stock}</div>
    </div>
  );
};

export default Category;
