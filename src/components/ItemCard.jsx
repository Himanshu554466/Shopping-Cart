import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import { itemContext } from "../itemContext";


function ItemCard({ name, price }) {
  const value = useContext(itemContext);

  //destructring setTotal and total
  const {setTotal,total} = value;

  const handleAdd = () =>{
    setTotal((total) => {
      const newTotal = total + price;
      console.log(newTotal);
      return newTotal;
    });
  
  };

  const handleRemove = () => {
    if(total>0)
    setTotal((total) => {
      const newTotal = total - price;
      console.log(newTotal);
      return newTotal;
    });
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
