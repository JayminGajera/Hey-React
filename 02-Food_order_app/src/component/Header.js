import React, { useState } from "react";
import food from "../../images/food.jpeg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-header">
        <img className="logo" src={food} alt="app logo" />
        <div className="status">
          {onlineStatus ? (
            <span className="online">Online</span>
          ) : (
            <span className="offline">Offline</span>
          )}
        </div>
      </div>
      <div className="items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contect">Contect Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cart-base">Cart</li>
          <span className="cart">{9}</span>
          <li>
            <button className="login-btn" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Log out" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
