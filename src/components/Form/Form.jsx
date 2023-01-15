import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import styles from './Form.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const nameInputId = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
const numberInputId = nanoid();

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, number);

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <section className={styles.section}>
      <form className={styles.phoneBookWindow} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name<br></br>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor={numberInputId}>
          Number<br></br>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </section>
  );
}
