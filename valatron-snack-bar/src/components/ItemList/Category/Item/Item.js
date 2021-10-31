import React from "react";
import cls from "./Item.module.css";
import Image from "next/image";
import { Button } from "@duik/it";

const Item = (props) => {
  const itemHandleClick = () => {
    props.itemHandleClick(props.id, true);
  };

  return (
    <div className={cls["item"]}>
      <Image src={props.icon} alt={props.name} className={cls["img"]} />
      <h2>{props.name}</h2>
      <p>{props.prize} Peněz</p>
      <Button primary className={cls["button"]} onClick={itemHandleClick}>
        Do koše
      </Button>
    </div>
  );
};

export default Item;
