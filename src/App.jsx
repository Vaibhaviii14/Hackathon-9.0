import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro.jsx'; // Corrected path based on your file tab

// --- Placeholder Components ---
// You can move these to their own files later

// Placeholder for your main app page
const MainApp = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold">Main App Page</h1>
  </div>
);

// Placeholder for your about page
const About = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold">About Page</h1>
  </div>
);

// --- Main App ---
function App() {
  return (
    // 1. Wrap your entire application in <BrowserRouter>
    <BrowserRouter>
      {/* 2. Define your routes */}
      <Routes>
        {/* The "Intro" component will now render on the homepage "/" */}
        <Route path="/" element={<Intro />} />
        
        {/* Add routes for the pages you are linking to */}
        <Route path="/app" element={<MainApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;