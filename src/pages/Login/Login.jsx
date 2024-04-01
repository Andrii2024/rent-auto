import React from 'react';
import { Form } from '../../components/FormInOut/FormInOut';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from '../../redux/auth/operations';
import { loginSchema } from '../../schemas/loginSchemas';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation;
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(data => {
        toast.success(`Welcome back: ${data.user.name}!`);
        navigate(location.state?.from || '/main', { replase: true });
      })
      .catch(error => {
        toast.error('Credentials is not valid');
      });
  };
  const values = {
    email: 'AndriiUA@gmail.com',
    password: 'AndriiUA@gmail',
  };
  return (
    <div>
      <Form
        formType="login"
        schema={loginSchema}
        onDataSubmit={handleSubmit}
        values={{ values }}
      />
    </div>
  );
};
