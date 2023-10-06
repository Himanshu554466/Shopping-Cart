import { createContext,useContext,useState } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart,setShowCart] = useState(false);

    const handleAdd = (price) =>{
        setTotal((total) => {
          const newTotal = total + price;
          console.log(newTotal);
          return newTotal;
        });
        setItem(item+1);
      };

  const handleRemove = (price) => {
    if(total>0)
    setTotal( total - price);
    if(item>0)
    setItem( item-1);
  };

  const toggle = () =>{
    setShowCart(!showCart);
  }

    return(
        <itemContext.Provider value ={{total ,setTotal ,item ,setItem ,handleAdd ,handleRemove,toggle}}>
          
          {/* paasing toggle as aprops */}
          {showCart && <CartModal toggle={toggle} />}
            {children}
        </itemContext.Provider>
    )
}
export {itemContext,useValue};
export default CustomItemContext;