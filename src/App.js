import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Addcontact from "./components/addcontact";
import Contactlist from "./components/contactlist";
// import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { uuid } from "uuidv4";

function App() {
  const Local_Storage_Key = "contacts";
  const [contacts, setcontacts] = useState([]);
  const contactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts, { id: uuid(), ...contact }]);
    console.log(uuid, "test");
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (retriveContacts) setcontacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      
      <Header />
      <Addcontact contactHandler={contactHandler} />
      <Contactlist contacts={contacts} />
     
    </div>
  );
}

export default App;
