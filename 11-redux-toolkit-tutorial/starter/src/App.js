import {useEffect} from 'react';
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';


function App() {
  const { isOpen } = useSelector((state)=>state.modal);
  const {cartItems} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems]);
  return (
    <main>
    {isOpen && <Modal></Modal>}
    <NavBar></NavBar>
    <CartContainer></CartContainer>
    </main>
  );
}
export default App;
