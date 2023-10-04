import React from "react";
import styles from "../styles/Total.module.css";
import Items from "./Items";

function Navbar() {
  const value = useContext(itemContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {0}</h1>
    </div>
  );
}

export default Navbar;
