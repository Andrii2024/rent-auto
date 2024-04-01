import React from 'react';
import { StyledButtonList, StyledLi } from './Main.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsLoading,
} from '../../redux/phonebook/contactsSlice';

import { Notification } from './Notific';
import { deleteContactThunk } from '../../redux/phonebook/operations';
import { Loader } from '../../components/Loader/Loader';
import { selectFilteredContacts } from '../../redux/phonebook/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
      {filteredContacts?.length === 0 ? (
        <Notification message="No contacts have been found" />
      ) : (
        <ul>
          {filteredContacts.map(contact => (
            <StyledLi key={contact.id}>
              {contact.name} - {contact.number}
              <StyledButtonList
                onClick={() => dispatch(deleteContactThunk(contact.id))}
              >
                Delete
              </StyledButtonList>
            </StyledLi>
          ))}
        </ul>
      )}
    </>
  );
};
