import Contect from "../Contect";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contect Us page test cases", () => {

  beforeAll(() => {
    console.log("before all");
  })

  beforeEach(() => {
    console.log("before earch");
  })

  test("Should load contectus component", () => {
    render(<Contect />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button contectus component", () => {
    render(<Contect />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load placeholder contectus component", () => {
    render(<Contect />);
    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contectus component", () => {
    render(<Contect />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(3);
  });
});
