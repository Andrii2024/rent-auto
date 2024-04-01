import { Form } from 'components/FormInOut/FormInOut';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { registerSchema } from '../../schemas/registerSchemas';

export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(registerThunk(data));
  };

  return (
    <div>
      <Form onDataSubmit={handleSubmit} schema={registerSchema} />
    </div>
  );
};
