import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Props by class component ", props);

    // this.state = {
    //   count: 0,
    //   count1: 1,
    // };

    // console.log(this.props.name + " Child Constructer is called...");

    this.state = {
      userInfo: {
        name: "John Doe",
        location: "Default",
        avatar_url: "https://dummy.com",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component did Mount called...")
    const data = await fetch("https://api.github.com/users/jaymingajera");
    const user = await data.json();
    console.log(user);

    this.setState({
      userInfo: user,
    });
  }

  componentDidUpdate(){
    console.log("component did updated called...");
  }

  componentWillUnmount(){
    console.log("component will unmounted...");
  }

  render() {
    // console.log(this.props.name + " Child Render is called...");

    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>{this.state.userInfo.name}</h2>
        <p>{this.state.userInfo.bio}</p>
        <h4>{this.state.userInfo.location}</h4>
    
        {/* <p>Likes : {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Like
        </button>
        <p>View : {this.state.count1}</p> */}
      </div>
    );
  }
}

export default UserClass;
