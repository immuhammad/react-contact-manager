import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contactcard from "./contactcard";

function Contactlist(props) {
  console.log(props);
  
  const rendercontact = props.contacts.map((contact) => {
    return <Contactcard contact={contact} />;
  });
  return <div className=" ui celled list"> {rendercontact} </div>;
 
}

export default Contactlist;
