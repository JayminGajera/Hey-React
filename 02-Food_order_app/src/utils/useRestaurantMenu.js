import { useEffect,useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetchData
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.246892&lng=72.917604&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      
      const json = await data.json();
      console.log("Menu data", json);
      setResInfo(json?.data);
    } catch (error) {
      console.log("Error while fetching menu data...");
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
