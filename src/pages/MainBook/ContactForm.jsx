import React, { useState } from 'react';

import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './Main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/phonebook/contactsSlice';
import { addContactThunk } from '../../redux/phonebook/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(
      addContactThunk({
        name: name.trim(),
        number: number.trim(),
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name:
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number:
        <StyledInput
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Add Contact</StyledButton>
    </StyledForm>
  );
};
