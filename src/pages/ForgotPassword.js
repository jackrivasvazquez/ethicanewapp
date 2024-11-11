// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px; 
  background-color: ${colors.background};
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: ${spacing.large};
  color: ${colors.primary};
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  margin-bottom: ${spacing.medium};
`;

const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: ${spacing.medium};

  &:hover {
    background-color: ${colors.secondary};
  }
`;

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    alert(`Password reset for ${email} with new password: ${newPassword}`);
    navigate('/login'); // Redirect back to login after reset
  };

  return (
    <Container>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </NavBar>

      <Title>Reset Password</Title>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <Input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
        required
      />
      <Button onClick={handlePasswordReset}>Reset Password</Button>
    </Container>
  );
}

export default ForgotPassword;
