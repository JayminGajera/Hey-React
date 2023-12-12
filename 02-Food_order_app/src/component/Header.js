import React, { useState,useContext } from "react";
import food from "../../images/food.jpeg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [open,setOpen] = useState(false);

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const data = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-header">
        <Link to="/"><img className="logo" src={food} alt="app logo" /></Link>
        <div className="status">
          {onlineStatus ? (
            <p className="online"></p>
          ) : (
            <p className="offline"></p>
          )}
        </div>
      </div>
      <div className="items">
          <ul className="item-lists">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contect">Contect Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li className="grocery-store">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cart-base"><Link to="/cart">Cart</Link></li>
          <span className="cart">{cartItems.length}</span>
          <li>
            <button className="login-btn" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Log out" : "Login"}
            </button>
          </li>
          <li>
            {data?.loggedInUser}
          </li>
        </ul>
      </div>
      <div className="burger-menu" onClick={() => setOpen(!open)}>{open ? <IoClose/> : <RxHamburgerMenu/>}</div>
      <div className="menu-open">
      {
        open && 
        <div className="burger-open">
        <ul className="item-lists-res">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contect">Contect Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li className="grocery-store-res">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cart-base"><Link to="/cart">Cart</Link></li>
          <span className="cart">{cartItems.length }</span>
          <li>
            <button className="login-btn" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Log out" : "Login"}
            </button>
          </li>
          <li>
            {data?.loggedInUser}
          </li>
        </ul>
        </div>
        
      }
      </div>
      
    </div>
  );
};

export default Header;
