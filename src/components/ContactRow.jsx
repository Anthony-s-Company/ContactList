
export default function ContactRow({ setSelectedContactId, contact }) {
  const contactClicked = () => {
    setSelectedContactId(contact.id);
  };

  return (
    <tr onClick={contactClicked}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.website}</td>
    </tr>
  );
}
