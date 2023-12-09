import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contect from "./component/Contect";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {

  const [userName,setUserName] = useState();

  //authentication
  useEffect(() => {
    const data = {
      name:"Jaymin Gajera"
    };
    setUserName(data.name);
  },[]);

  return (
    <UserContext.Provider value={{loggedInUser: userName,setUserName} }>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contect",
        element: <Contect />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
