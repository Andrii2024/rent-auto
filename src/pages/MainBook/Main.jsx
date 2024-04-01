import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/phonebook/filtersSlice';
import { ContactForm } from '../../pages/MainBook/ContactForm';
import { ContactList } from '../../pages/MainBook/ContactList';
import { Filter } from '../../pages/MainBook/Filter';
import { StyleH1, StyledWrapper } from '../MainBook/Main.styled';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from '../../redux/phonebook/operations';
import { selectFilter } from '../../redux/phonebook/filtersSlice';
import { selectContacts } from '../../redux/phonebook/contactsSlice';

export const Main = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContactThunk(newContact));
  };
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const handleDeleteUser = id => {
    dispatch(deleteContactThunk(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const totalContactsCount = contacts.length;

  return (
    <StyledWrapper>
      <StyleH1>Phone Book</StyleH1>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <StyleH1>Contacts: {totalContactsCount}</StyleH1>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onClickDelete={handleDeleteUser}
      />
    </StyledWrapper>
  );
};
