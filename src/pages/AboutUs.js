// src/pages/AboutUs.js
import React from 'react';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px; /* Offset for the fixed navbar */
  background-color: ${colors.background};
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: ${spacing.large};
  color: ${colors.primary};
`;

const TeamProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.large};
  margin-bottom: ${spacing.large};
`;

const TeamMember = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${spacing.small};
`;

const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: ${spacing.large};

  &:hover {
    background-color: ${colors.secondary};
  }
`;

function AboutUs() {
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    navigate('/ask-question');
  };

  return (
    <Container>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </NavBar>

      <Title>Team Profile</Title>
      
      <p>Welcome to Ethica: Your Ethical Question Asker</p>
      <p>This page is dedicated to introducing the amazing team behind Ethica!</p>
      
      <TeamProfileContainer>
        <TeamMember>
          <ProfileImage src="/hailey.png" alt="Hailey DeMark" />
          <p><strong>Hailey DeMark</strong><br />Scottsdale, AZ<br />Major: Computer Science, Creative Computing<br />Minor: Data Science<br />Fun Fact: I am a fitness instructor</p>
        </TeamMember>
        <TeamMember>
          <ProfileImage src="/jack.png" alt="Jack Rivas-Vazquez" />
          <p><strong>Jack Rivas-Vazquez</strong><br />Miami, FL<br />Majors: Computer Science + Data Science<br />Fun Fact: I like to play the guitar</p>
        </TeamMember>
        <TeamMember>
          <ProfileImage src="/maya.png" alt="Maya Siddiqui-Patel" />
          <p><strong>Maya Siddiqui-Patel</strong><br />Toronto, ON<br />Major: Computer Science<br />Minor: Business<br />Fun Fact: I like video games</p>
        </TeamMember>
      </TeamProfileContainer>

      <Button onClick={handleAskQuestion}>Ask an Ethical Question</Button>
    </Container>
  );
}

export default AboutUs;


