import React from "react";
import styles from "../styles/CartModal.module.css";

function CartModal() {
function close(){
  
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
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
