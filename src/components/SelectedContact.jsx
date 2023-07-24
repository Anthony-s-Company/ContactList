import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
   const [contact, setContact] = useState(null);

  useEffect(() => {
   const fetchContact = async () => {
      try {
        const response = await fetch(
               `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
           );
           const data = await response.json();
        setContact(data);
       } catch (error) {
           console.error(error);
       }
   }
   fetchContact();
}, [selectedContactId]);

const backToHome = () => {
   setSelectedContactId(null);
 };
  return (
    <div>
      {contact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <div>
            <h3>Address</h3>
            <p>{contact.address.street}, {contact.address.suite}, {contact.address.city} {contact.address.zipcode}</p>
          </div>
          <div>
            <h3>Buisness Details</h3>
            <p>Company Name: {contact.company.name} Street</p>
            <p>Company Catchphrase: {contact.company.catchPhrase}</p>
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={backToHome}>BACK</button>
    </div>
  );
}