import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems",cartItems)
  const dispatch = useDispatch();

  const [totalAmount,setTotalAmount] = useState(0);

  const clearAllCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    setTotalAmount(cartItems?.map((total) => total?.card?.info?.price/100).reduce((acc,curr) => acc + curr,0));
  },[cartItems]);

  return (
    <div className="cart-added-items">
      <h2>Cart</h2>
      <div className="cart-item-frame">
        {cartItems.length > 0 ? (
          <div className="cart-item-res">
            <button onClick={clearAllCart} className="clear-cart-btn">Clear Cart</button>
            <ItemList items={cartItems} />
            <p className="total-amount">total amount ₹{totalAmount}</p>
          </div>
        ) : (
          <div className="cart-empty-ui">
            <p className="cart-empty">cart is empty</p>
            <div>
            <button className="explore-btn">
              <Link to="/" >Explore</Link>
            </button>
            </div>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
