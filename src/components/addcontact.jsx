import React, { Component } from "react";

class Addcontact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory!");
    }
    this.props.contactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div>
        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>

            <input
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>

            <input
              type="text"
              value={this.state.email}
              name="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <button className="ui button blue">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Addcontact;
