import { ContactsList } from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <>
      <h1
        style={{
          margin: 15,
        }}
      >
        Phonebook
      </h1>
      <Form />
      <h2
        style={{
          margin: 15,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactsList />
    </>
  );
}
