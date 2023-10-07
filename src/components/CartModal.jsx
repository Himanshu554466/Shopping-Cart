import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

// destructring the toggle
function CartModal({toggle}) {
  const {cart,setCart} = useValue();

function close(){
  toggle();
}

function clear(){
  // cart become empty array after click on clear
  setCart([]);
}

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={close}>
        Close
      </div>
      <div className={styles.clearButton} onClick={clear}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return(
            <div className={styles.cartCard} key={item.id}>
              <h1>{item.className}</h1>
              <h2>X {item.qty}</h2>
              <h3>X {item.qty *item.price} </h3>
            </div>
          )
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>&#x20B9; Price</div>
      </div>
    </div>
  );
}

export default CartModal;
