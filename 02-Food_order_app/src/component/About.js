import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
          <div>
            <UserContext.Consumer>
            {(data) => <p>{data?.loggedInUser}</p>}
            </UserContext.Consumer>
          </div>
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
