import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems",cartItems)
  const dispatch = useDispatch();

  const clearAllCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-added-items">
      <h2>Cart</h2>
      <div className="cart-item-frame">
        {cartItems.length > 0 ? (
          <div>
            <button onClick={clearAllCart} className="clear-cart-btn">Clear Cart</button>
            <ItemList items={cartItems} />
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
