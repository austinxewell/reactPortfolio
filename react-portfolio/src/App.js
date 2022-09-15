import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Component Imports
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'


function App() {
  const [ currentPage, handlePageChange] = useState('LandingPage')

  const renderPage = (currentPage) => {
    switch(currentPage) {
      case 'LandingPage':
        return <LandingPage />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
    }
  }

  return (
    <body>
      <Router>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />

            <Route element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </body>
  );
}

export default App;
