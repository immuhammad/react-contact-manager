import React, { Component } from "react";
import user from "../images/user.jpg";
const Contactcard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" alt="user" src={user} />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon "
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};

export default Contactcard;
