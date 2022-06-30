import React, { Component } from "react";
class Api extends Component {
  state = {
    users: []
  };
  componentDidMount() {
   this.fetchusersData();
  }

  fetchusersData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      this.setState({
        users
      });
    });
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>
              <h1>{user.name}</h1>
              <h4>Email Address: ({user.email})</h4>
              <h5>Phone number: {user.phone}</h5>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}
export default Api;