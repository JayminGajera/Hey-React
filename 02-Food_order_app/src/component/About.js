import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructer is called...");
  }

  componentDidMount(){
    // console.log("Parent Component did Mount called...")
  }

  render() {
    // console.log("parent render is called...");

    return (
      <div className="about">
        <h1>About Us</h1>
        <div>
          {/* <User name={"Jaymin Gajera"} /> */}
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
