import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
// import { itemContext } from './itemContext';
// import { useValue } from './itemContext';
import CustomItemContext from './itemContext';
function App() {

  return (
        <div className='App'>
          <h2>Shopping Cart</h2>
         <CustomItemContext>
            <Navbar />
            <Items />   
            </CustomItemContext>

                 </div>
  );
}
export default App;
