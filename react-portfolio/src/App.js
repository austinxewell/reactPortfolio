import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Component Imports
import Nav from './components/Nav'
import Footer from './components/Footer'

// Pages Imports
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'


function App() {
  const [ currentPage, handlePageChange] = useState('About')

  const renderPage = (currentPage) => {
    switch(currentPage) {
      case 'About':
        return <About />;
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
            <Route exact path='/about' element={<About />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/resume' element={<Resume />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </body>
  );
}

export default App;
