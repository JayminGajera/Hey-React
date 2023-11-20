import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contect from "./component/Contect";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contect",
        element:<Contect/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>, 
        
      }
    ],
    errorElement:<Error/>,
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);