// src/pages/CreateAccount.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const colors = {
  primary: '#4A90E2',
  secondary: '#8B5E3C',
  background: '#F9F9F9',
};

const spacing = {
  small: '10px',
  medium: '20px',
  large: '30px',
};

const NavBar = styled.div`
  width: 100%;
  padding: ${spacing.small};
  background-color: ${colors.primary};
  color: white;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  justify-content: flex-start;
  padding-left: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   background-color: ${colors.background};
//   padding-top: 20px; /* Offset for fixed navbar */
// `;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px; /* Offset for the fixed navbar */
  background-color: ${colors.background};
  min-height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
  width: 100%;
  max-width: 400px; /* Consistent max-width for centering */
  align-items: stretch; /* Ensure children take full width */
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: ${spacing.medium};
  color: ${colors.primary};
`;

const Input = styled.input`
  padding: 10px;
  width: 100%; /* Full width inside FormContainer */
  box-sizing: border-box; /* Ensures padding is included in width */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 10px;
  width: 100%; /* Full width inside FormContainer */
  box-sizing: border-box; /* Ensures padding is included in width */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: ${spacing.medium};

  &:hover {
    background-color: ${colors.secondary};
  }
`;

function CreateAccount() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSignedUp(true);
  };

  return (
    <Container>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </NavBar>

      <Title>Create New Account</Title>
      <FormContainer>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleInputChange}
          required
        />
        <Button onClick={handleSubmit}>Sign Up</Button>

        {isSignedUp && (
          <Button onClick={() => navigate('/login')}>
            Log In
          </Button>
        )}
      </FormContainer>
    </Container>
  );
}

export default CreateAccount;
