import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with login button",() => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
   );

   const loginBtn = screen.getByRole("button");
   expect(loginBtn).toBeInTheDocument();

});

it("Should load header component and login button onclick change in logout ",() => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
   );

   const loginBtn = screen.getByRole("button",{name:"Login"});
   fireEvent.click(loginBtn);

   const logoutBtn = screen.getByRole("button",{name:"Log out"});

   expect(logoutBtn).toBeInTheDocument();

});