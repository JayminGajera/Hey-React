import { fireEvent, render,screen } from "@testing-library/react";
import {act} from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA);
        }
    });
}); //this function give mock fetch function

it("should render body component with search ",async () => {

    await act(async() => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const searchBtn = screen.getByRole("button",{name:"Search"});
        // console.log("search ",searchBtn);

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"burger"}});
    fireEvent.click(searchBtn);

    const card = screen.getAllByTestId("resCard");

    expect(card.length).toBe(1);
})