import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/react.svg";
import productImg from "../assets/react.svg";

const Intro = () => {
  // Smooth scroll handler
  const handleScroll = () => {
    const target = document.getElementById("translator-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-amber-400">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        </div>
        <h1 className="text-2xl font-bold text-indigo-400 tracking-wide">
          CaptionFlow
        </h1>
      </nav>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-grow px-8 md:px-16 py-10 gap-10">
        {/* Left - Features */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
            Key Features 🚀
          </h2>

          <ul className="space-y-5 text-gray-300 text-lg">
            <li className="ml-0 list-disc list-inside">
              Real-time caption generation from audio or video
            </li>
            <li className="ml-6 list-disc list-inside">
              Translate captions into multiple Indian languages
            </li>
            <li className="ml-2 list-disc list-inside">
              Accurate speech recognition powered by AI
            </li>
            <li className="ml-8 list-disc list-inside">
              Seamless integration with live video streams
            </li>
          </ul>

          {/* Get Started Button */}
          <button
            onClick={handleScroll}
            className="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Get Started →
          </button>
        </div>

        {/* Right - Animated Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src={productImg}
            alt="Product"
            className="w-72 md:w-96 rounded-xl shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
