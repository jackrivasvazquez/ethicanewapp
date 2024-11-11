// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import AskQuestion from './pages/AskQuestion';
import ForgotPassword from './pages/ForgotPassword'; 
import './pages/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ask-question" element={<AskQuestion />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
