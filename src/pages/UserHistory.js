// src/pages/UserHistory.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px; /* Offset for fixed navbar */
  background-color: ${colors.background};
  min-height: 100vh;
`;

const NavBar = styled.div`
  width: 100%;
  padding: 10px;
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

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: ${spacing.large};
  color: ${colors.primary};
`;

const HistoryItem = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: ${spacing.medium};
  margin-bottom: ${spacing.medium};
  width: 100%;
  max-width: 600px;
`;

const Question = styled.p`
  font-weight: bold;
  margin: 0 0 ${spacing.small} 0;
`;

const Response = styled.p`
  margin: 0;
`;

function UserHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch the user's question history from backend
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user-history');
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };
    fetchHistory();
  }, []);

  return (
    <Container>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/ask-question">Ask Question</NavLink>
      </NavBar>

      <Title>Your Question History</Title>
      {history.length === 0 ? (
        <p>No questions asked yet.</p>
      ) : (
        history.map((item, index) => (
          <HistoryItem key={index}>
            <Question>Q: {item.question}</Question>
            <Response>A: {item.response}</Response>
          </HistoryItem>
        ))
      )}
    </Container>
  );
}

export default UserHistory;
