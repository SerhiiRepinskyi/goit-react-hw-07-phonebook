import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts, selectorFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';
import { ContactsList, ContactItem, Btn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  // Фільтрація контактів за значенням фільтра
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <Btn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </Btn>
        </ContactItem>
      ))}

      {!filteredContacts?.length && <div>No contacts found.</div>}
    </ContactsList>
  );
};

export default ContactList;
