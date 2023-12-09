import React, { useState,useContext } from "react";
import food from "../../images/food.jpeg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const data = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-header">
        <Link to="/"><img className="logo" src={food} alt="app logo" /></Link>
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
          <li className="grocery-store">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cart-base">Cart</li>
          <span className="cart">{9}</span>
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
    </div>
  );
};

export default Header;
