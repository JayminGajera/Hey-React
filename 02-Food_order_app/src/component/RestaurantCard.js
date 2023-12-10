import React, { useContext } from "react";
// import { MENU_IMG } from "../utils/constants";
// import UserContext from "../utils/UserContext";

const RestaurantCard = ({ data }) => {

  // const {loggedInUser} = useContext(UserContext);

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
        {/* <p>{loggedInUser}</p> */}
      </div>
    </div>
  );
};


//Higher Order Component (HOC)
//Input - RestaurantCard
//Output - PromotedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="promoted">open</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
}

export default RestaurantCard;
