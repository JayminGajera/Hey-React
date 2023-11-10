import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React !"
// );
//object in above line is used where you will give attribute to your tags.
//exp. my h1 tag want id of heading so {id:"heading"}
// console.log(heading); //it is the object, it is not h1 tag

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //render is used to take heading object and put it into heading tag

//how to create nested structure in react
/*
    <div id="parent">
        <div id="child">
            <h1>I'm h1</h1>
            <h2>I'm h2</h2>
        </div>
        <div id="child2">
            <h1>I'm h1</h1>
            <h2>I'm h2</h2>
        </div>
    </div>
*/

//this is the core react
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1"),
//     React.createElement("h2", {}, "I'm h2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1"),
//     React.createElement("h2", {}, "I'm h2"),
//   ]),
// ]);

//this react code very messay and unreadable that is why JSX is exist

//Element
const jsxHeading = (
  <h1 id="heading">Hello Everyone - In My React Learning Book</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);//this is how React Element render

const Title = () => (
  <h2>call the function</h2>
);

//Component
const HeadingComponent = () => {
  return (
    <>
      {jsxHeading}
      {Title()}
      <Title/>
      <Title></Title>
      <h1>This is Component</h1>
    </>
  )
}

root.render(<HeadingComponent/>) //this is how React Component render