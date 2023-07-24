import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  console.log("Contacts: ", contacts);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow 
              key={contact.id} 
              contact={contact} 
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
}