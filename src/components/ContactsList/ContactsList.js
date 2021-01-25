import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContact,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import {
  getVisibleContacts,
  getError,
} from '../../redux/contacts/contacts-selectors';
import styles from './ContactsList.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {contacts.length > 0 && !error ? (
        <ul className={styles.contactsList}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.contactsItem} key={id}>
              <p className={styles.contactName}>
                {name}: {number}
              </p>
              <button
                className={styles.buttonDelete}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>{error && <h1>Error</h1>}</div>
      )}
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
