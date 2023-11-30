// SignupPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  text-align: center;
  padding: 2em;
`;

const SignupForm = styled.form`
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
  phoneNumber: string;
  username: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: '',
    username: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Signup form submitted:', formData);
  };

  return (
    <SignupContainer>
      <h2>Create an Account</h2>
      <SignupForm onSubmit={handleSubmit}>
        <FormInput
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <FormButton type="submit">Sign Up</FormButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignupPage;