import React, { useState } from "react";
import cls from "./Cart.module.css";
import { ContainerVertical } from "@duik/it";
import { Button } from "@duik/it";
import Modal from "react-modal";
import QRCode from "qrcode.react";
import getQRPaymentString from "../../helpers/GetQRPaymentString";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

const Cart = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrPaymentString, setQrPaymentString] = useState("");

  const itemHandleClick = (id) => {
    props.itemHandleClick(id, false);
  };

  const qrCodeClick = () => {
    setQrPaymentString(getQRPaymentString("2900408123/0800", "Zatim stazista", "Snack bar platba", getTotalPrize()));
    console.log(getQRPaymentString("2900408123/0800", "Zatim stazista", "Snack bar platba", getTotalPrize()));
    setIsModalOpen(true);
  };

  const onModalOpen = () => {};

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getTotalPrize = () => {
    let prize = 0;
    itemsInCart.forEach((item) => {
      prize += item.count * item.prize;
    });
    return prize;
  };

  const itemsInCart = props.stock.filter((st) => {
    if (st.count <= 0) return false;
    else return true;
  });

  const items = itemsInCart.map((item) => {
    return (
      <div className={cls["cart-item"]}>
        <p>
          {item.name} - {item.count} ks
        </p>
        <div className={cls["cart-item-prize"]}>
          <p>{item.count * item.prize},-</p>
          <Button className={cls["cart-item-button"]} onClick={() => itemHandleClick(item.id)}>
            -
          </Button>
        </div>
      </div>
    );
  });

  const totalPrize = getTotalPrize();

  return (
    <div className={cls["cart-container"]}>
      <h2>Chálkošík</h2>
      <ContainerVertical className={cls["stock-container"]}>{items}</ContainerVertical>
      <div className={cls["bottom-container"]}>
        <h3>Cena: {totalPrize},- Kč</h3>
        <Button primary className={cls["qr-button"]} onClick={qrCodeClick}>
          QR kód
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onAfterOpen={onModalOpen} onRequestClose={closeModal} style={customStyles}>
        <QRCode value={qrPaymentString} size={190} />
      </Modal>
    </div>
  );
};

export default Cart;
