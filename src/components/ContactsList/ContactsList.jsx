import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import styles from './ContactsList.module.css';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  console.log(contacts);
  return (
    <section className={styles.section}>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  {isLoading ? 'Deleting' : 'Delete'}
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
