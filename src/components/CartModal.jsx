import React from "react";
import styles from "../styles/CartModal.module.css";

// destructring the toggle
function CartModal({toggle}) {

function close(){
  toggle();
}

function clear(){

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

      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>&#x20B9; Price</div>
      </div>
    </div>
  );
}

export default CartModal;
