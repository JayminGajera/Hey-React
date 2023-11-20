import React from "react";
import { MENU_IMG } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  return (
    <div className="main-card">
      <div className="menu-image">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${data?.info?.cloudinaryImageId}`}
        />
      </div>
      <div className="menu-details">
        <h2>{data?.info?.name}</h2>
        <p>{data?.info?.cuisines?.join(", ")}</p>
        <p>{data?.info?.costForTwo}</p>
        <div className="ratings-div">
          <p className="rating">{data?.info?.avgRating} star</p>
          <p>{data?.info?.totalRatingsString} Total ratings</p>
        </div>
        <p>{data?.info?.locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
