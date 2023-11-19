import { useGlobalContext } from "./context";
import CartItem from "./CartItem";
export default ()=>{
  const {cart, clearCart,totalCost} = useGlobalContext();
  const cartArray = Array.from(cart.entries());
  if(cartArray.length == 0){
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header><h2>Your Bag</h2></header>
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className='btn btn-hipster' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
}















// import CartItem from './CartItem';
// import cartItems from './data';
// const CartContainer = () => {
//   const cartArray = [...cartItems];

//   if (cartArray.length === 0) {
//     return (
//       <section className='cart'>
//         {/* cart header */}
//         <header>
//           <h2>your bag</h2>
//           <h4 className='empty-cart'>is currently empty</h4>
//         </header>
//       </section>
//     );
//   }
//   return (
//     <section className='cart'>
//       {/* cart header */}
//       <header>
//         <h2>your bag</h2>
//       </header>
//       {/* cart items */}
//       <div>
//         {cartArray.map((cartItem) => {
//           return <CartItem key={cartItem.id} {...cartItem} />;
//         })}
//       </div>
//       {/* cart footer */}
//       <footer>
//         <hr />
//         <div>
//           <h5 className='cart-total'>
//             total <span>$10</span>
//           </h5>
//         </div>
//         <button
//           className='btn btn-hipster'
//           onClick={() => console.log('clear cart')}
//         >
//           clear cart
//         </button>
//       </footer>
//     </section>
//   );
// };

// export default CartContainer;
