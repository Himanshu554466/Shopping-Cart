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

    // craeted state to store all boject when cart is clicked
    const [cart,setCart] = useState([]); 

    const handleAdd = (prod) =>{
        // setTotal((total) => {
        //   // const newTotal = total + price;
        //   // console.log(newTotal);
        //   // return newTotal;
        // });
        // setItem(item+1);

        const index = cart.findIndex((item) => item.id === prod.id);
        if(index === -1){
          setCart([...cart,{...prod,qty:1}]);
          setTotal(total + prod.price);
        }
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