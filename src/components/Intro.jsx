// src/pages/Intro.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Placeholder for the About component (you can move this to a separate file later)
const AboutSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-gray-800 text-white shadow-xl transform transition-transform duration-300 ease-in-out z-20
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white text-2xl font-bold">
          &times;
        </button>
      </div>
      <div className="p-6 overflow-y-auto h-[calc(100%-64px)]"> {/* Adjusted height */}
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-cyan-400 pb-2">About Caption Flow</h2>
        <p className="mb-4 text-gray-300">
          Welcome to Caption Flow! We are dedicated to providing cutting-edge, real-time captioning and transcription services for all your video and audio needs. Our advanced AI-powered engine ensures accuracy and speed, helping you break down communication barriers.
        </p>
        <p className="mb-4 text-gray-300">
          Whether you're streaming live content, conducting virtual meetings, or simply watching a video, Caption Flow makes accessibility effortless. Our intuitive platform supports multiple languages and integrates seamlessly with various sources.
        </p>
        <p className="mb-4 text-gray-300">
          Our mission is to empower creators, educators, and businesses by making spoken content universally understandable. Join us in building a more inclusive digital world, one caption at a time.
        </p>
        <p className="text-gray-300">
          For any inquiries, feel free to contact us through our main application.
        </p>
      </div>
    </div>
  );
};


export default function Intro() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-black"> {/* Changed background to black */}

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-[5vw] py-5 box-border bg-black shadow-lg"> {/* Navbar background also black */}
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          {/* Cyan Abstract Logo */}
          <div className="w-8 h-8 flex items-center justify-center relative">
            <div className="absolute w-5 h-5 bg-cyan-400 rounded-full animate-pulse opacity-75"></div>
            <div className="absolute w-3 h-3 bg-cyan-200 rounded-full"></div>
          </div>
          <span className="text-cyan-400 text-2xl font-extrabold tracking-wide">
            Caption Flow
          </span>
        </div>

        {/* About Button - now toggles the sidebar */}
        <div className="flex">
          <button
            onClick={toggleAbout}
            className="px-6 py-3 text-base font-semibold text-white border-2 border-cyan-400 rounded-full transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            About
          </button>
        </div>
      </nav>

      {/* --- MAIN INTRO CONTENT --- */}
      <div className="flex flex-col items-center justify-center flex-1 p-5 text-center text-white pt-32">
        <h1 className="mb-4 text-4xl sm:text-6xl font-extrabold">
          Real-Time Captions.
        </h1>
        <h2 className="mb-10 text-lg sm:text-xl font-normal opacity-90 max-w-lg">
          Transcribe any video, any stream, any language. Instantly.
        </h2>

        <Link
          to="/app"
          className="w-full max-w-md py-4 px-8 text-2xl font-bold bg-white border-4 border-cyan-400 text-cyan-700 rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Get Started
        </Link>
      </div>

      {/* About Sidebar Component */}
      <AboutSidebar isOpen={isAboutOpen} onClose={toggleAbout} />

      {/* Optional: Overlay to dim background when sidebar is open */}
      {isAboutOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleAbout}
        ></div>
      )}
    </div>
  );
}
