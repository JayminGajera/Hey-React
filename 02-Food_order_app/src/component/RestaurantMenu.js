import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo?.length === null) return <Shimmer />;

  const name = resInfo?.cards[0]?.card?.card?.info?.name;
  console.log("name", name);

  const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines;
  console.log("cuisines", cuisines);

  const costForTwoMessage =
    resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage;
  console.log("costForTwoMessage", costForTwoMessage);

  console.log(
    "resinfo before item ",
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards
  );

  const carousel =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log("items ", carousel);

  const categories =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories",categories);

  return (
    <div className="restaurant-menu-page">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h2 className="menu-title">Menu</h2>

      {/* {carousel?.map((menu) => {
        return (
          <div key={menu?.card?.info?.bannerId} className="restro-menu-card">
            <div>
              <h3>{menu?.card?.info?.category}</h3>
            </div>

            <div className="menu-card-item">
              <div>
                <img
                  className="menu-card-image"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${menu?.card?.info?.imageId}`}
                  alt="Food Image"
                />
              </div>
              <div className="menu-desc">
                <h4>{menu?.card?.info?.name}</h4>
                <h4>₹{menu?.card?.info?.price / 100}</h4>
                <h5>
                  {menu?.card?.info?.offerTags?.title}{" "}
                  {menu?.card?.info?.offerTags?.subTitle}
                </h5>
              </div>
            </div>
          </div>
        );
      })} */}

      {
        categories?.map((category) => {
          return <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
        })
      }
    </div>
  );
};

export default RestaurantMenu;
