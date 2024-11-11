// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const colors = {
  primary: '#4A90E2', // Adjust color as needed
  secondary: '#8B5E3C',
  background: '#F9F9F9',
};

const spacing = {
  small: '10px',
  medium: '20px',
  large: '30px',
};

// Define the NavBar styled component
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

// Styled container to center the content
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${colors.background};
`;

// Styled header with larger font size
const Title = styled.h2`
  font-size: 4em;
  margin-bottom: ${spacing.medium};
  color: ${colors.primary};
`;

// Styled paragraph with larger font size, aligned to button width
const Text = styled.p`
  font-size: 1.2em;
  margin-bottom: ${spacing.large};
  color: ${colors.secondary};
  max-width: 400px;
  text-align: center;
`;

// Container for buttons to place them side by side with increased spacing
const ButtonContainer = styled.div`
  display: flex;
  gap: ${spacing.large};
  margin-top: ${spacing.large};
`;

// Styled button for navigation links with fixed width
const Button = styled(Link)`
  background-color: ${colors.primary};
  color: white;
  padding: 11px 18px;
  width: 180px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-decoration: none;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

function LandingPage() {
  return (
    <Container>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-account">Sign Up</NavLink> {/* Link corrected here */}
        <NavLink to="/login">Log In</NavLink>
      </NavBar>

      <Title>Ethica</Title>
      <Text>Create an account or log in to ask AI all of your ethical questions</Text>
      <ButtonContainer>
        <Button to="/create-account">Create an Account</Button> {/* Correct route */}
        <Button to="/login">Log In</Button>
      </ButtonContainer>
    </Container>
  );
}

export default LandingPage;
