import { sum } from "../Sum";

it("sum function should calculate the sum of two numbers",() => {
    
    const res = sum(5,3);

    //Assertion
    expect(res).toBe(8);

});