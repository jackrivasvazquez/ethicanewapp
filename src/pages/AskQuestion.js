// src/App.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px; /* Offset for the fixed navbar */
  background-color: ${colors.background};
  min-height: 100vh;
  text-align: center;
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

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4', // Use the correct model name
          messages: [
            { role: 'user', content: question },
          ],
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`, // Replace with your OpenAI API key
          },
        }
      );

      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching response:', error);

      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        setResponse(`Error: ${error.response.status} - ${error.response.data.error.message}`);
      } else if (error.request) {
        console.error('Request made but no response received:', error.request);
        setResponse('Error: No response received from the server.');
      } else {
        console.error('Error setting up the request:', error.message);
        setResponse(`Error: ${error.message}`);
      }
    }

    setLoading(false);
    setQuestion('');
  };

  const handleBackToAboutUs = () => {
    navigate('/about-us');
  };

  return (
    <Container>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/ask-question">Ask Questions</NavLink>
      </NavBar>

      <Title>Ask an Ethical Question!</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Type your question here"
          required
        />
        <Button type="submit">Ask</Button>
      </form>
      {loading ? <p>Loading...</p> : <p>{response}</p>}

      {/* <Button onClick={handleBackToAboutUs}>
        Return to About Us
      </Button> */}
    </Container>
  );
}

export default App;