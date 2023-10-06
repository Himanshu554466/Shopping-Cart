import React from "react";
import styles from "../styles/Total.module.css";
// import { itemContext } from "../itemContext";
// import { useContext } from "react";
import { useValue } from "../itemContext";
import CartModal from "./CartModal";

function Navbar() {
  // const value = useContext(itemContext);
  const {item,total,setItem,setTotal,toggle} = useValue();

  //creating reset button
  const handleReset = ()=>{
    setItem(0);
    setTotal(0);
  }

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className= {styles.buttonWrapper}><button  className= {styles.button} onClick = {()=>toggle()} >Cart</button></div>
      <div className= {styles.buttonWrapper}> <button onClick = {()=>handleReset()} className= {styles.button}>Reset</button></div>
    </div>
  );
}

export default Navbar;
