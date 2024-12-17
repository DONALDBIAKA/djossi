import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;