import React from "react";
import cls from "./Item.module.css";
import Image from "next/image";

const Item = (props) => {
  return (
    <div className={cls["item"]}>
      <Image src={props.icon} alt={props.name} className={cls["img"]} />
      <h2>{props.name}</h2>
      <p>{props.prize} Peněz</p>
    </div>
  );
};

export default Item;
