import React from "react";
import Card from "./Card"
import contacts from "../contacts";

function createCard(contact) {  
  return (
    <Card 
    key = {contact.id}
    name = {contact.name}
    img = {contact.imgURL}
    tel = {contact.phone}
    email = {contact.email}
    />
  )
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}

      {/* <Card name = {contacts[0].name}
        img = {contacts[0].imgURL}
        tel = {contacts[0].phone}
        email = {contacts[0].email}
      ></Card>

      <Card name = {contacts[1].name}
              img = {contacts[1].imgURL}
              tel = {contacts[1].phone}
              email = {contacts[1].email}
      ></Card>

      <Card name = {contacts[2].name}
                    img = {contacts[2].imgURL}
                    tel = {contacts[2].phone}
                    email = {contacts[2].email}
      ></Card> */}

      {/* <div className="card">
        <div className="top">
          <h2>Beyonce</h2>
          <img
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>+123 456 789</p>
          <p>b@beyonce.com</p>
        </div>
      </div> */}

    </div>
  );
}

export default App;
