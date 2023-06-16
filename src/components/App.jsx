import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  Container,
  Title,
  Subtitle,
  AmountContacts,
  ContactsNum,
  Message,
} from './App.styled';

import { useSelector } from 'react-redux';
import { selectorContacts } from '../redux/selectors';

export default function App() {
  const contacts = useSelector(selectorContacts); // Отримуємо всі контакти зі стейта Store

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Subtitle>Contacts</Subtitle>
      <AmountContacts>
        All contacts in the phonebook:{' '}
        <ContactsNum>{contacts.length}</ContactsNum>
      </AmountContacts>

      {contacts.length > 0 ? (
        <>
          <Filter  />
          <ContactList />
        </>
      ) : (
        <Message>Contact list is empty</Message>
      )}

      <ToastContainer autoClose={2000} position="top-center" theme="colored" />
    </Container>
  );
}
