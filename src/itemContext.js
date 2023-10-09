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

    // craeted state to store all boject when cart is clicked with empty array
    const [cart,setCart] = useState([]); 

    const handleAdd = (prod) =>{
      console.log(prod);
        // setTotal((total) => {
        //   // const newTotal = total + price;
        //   // console.log(newTotal);
        //   // return newTotal;
        // });
        // setItem(item+1);


        // checking item is present in the array or not,if present then index set to other than -1
        const index = cart.findIndex((item) => item.id === prod.id);

      //  it means item is not present 
        if(index === -1){
          // using spread opr
          setCart([...cart,{...prod,qty:1}]);
          setTotal(total + prod.price);
        } 
        // it means item is ProgressEvent,we can just increase the qty++
         else{
          cart[index].qty++;
          setCart(cart);
          setTotal(total + cart[index].price)
        }
        setItem(item+1);
      };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if(index!==-1){
      cart[index].qty--;
      setItem(item-1);
      setTotal(total - cart[index].price);
      if(cart[index].qty === 0){
        cart.splice(index,1);
      }
    }
    setCart(cart);

  };

  const toggle = () =>{
    setShowCart(!showCart);
  }

    return(
        <itemContext.Provider value ={{total ,setTotal ,item ,setItem ,handleAdd ,handleRemove,toggle,cart,setCart}}>

          {/* paasing toggle as aprops */}
          {showCart && <CartModal toggle={toggle} />}
            {children}
        </itemContext.Provider>
    )
}
export {itemContext,useValue};
export default CustomItemContext;