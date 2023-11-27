import {useEffect} from 'react';
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems,calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';


function App() {
  const { isOpen } = useSelector((state)=>state.modal);
  const {cartItems,isLoading } = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartItems('random'));
  },[]);
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
    {isOpen && <Modal></Modal>}
    <NavBar></NavBar>
    <CartContainer></CartContainer>
    </main>
  );
}
export default App;
