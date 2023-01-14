import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactsList.module.css';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/filter/filter-selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  console.log(visibleContacts);
  return (
    <section className={styles.section}>
      {visibleContacts.length > 0 ? (
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no contacts yet</p>
      )}
    </section>
  );
};
