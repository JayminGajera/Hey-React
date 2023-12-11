import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMoks.json";
import "@testing-library/jest-dom";

it("Should render restaurant Card component with props data ",() => {

    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();

});