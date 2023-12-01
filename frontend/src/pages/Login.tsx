// LoginPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  text-align: center;
  padding: 2em;
`;

const LoginForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 1em;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic login logic for demonstration purposes
    if (formData.username === 'demo' && formData.password === 'password') {
      setLoggedIn(true);
      // You might want to redirect the user to a different page upon successful login
      console.log('Login successful!');
    } else {
      // Handle incorrect credentials
      console.log('Invalid credentials. Please try again.');
    }
  };

  if (loggedIn) {
    // You can redirect the user to a different page upon successful login
    return <div>You are already logged in!</div>;
  }

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <FormButton type="submit">Log In</FormButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
