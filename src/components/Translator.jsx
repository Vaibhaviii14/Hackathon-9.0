import React, { useState } from "react";

const Translator = () => {
  const [targetLang, setTargetLang] = useState("hindi");

  const languages = [
    "English", "Hindi", "Bengali", "Marathi", "Tamil",
    "Telugu", "Gujarati", "Kannada", "Malayalam", "Punjabi",
    "Odia", "Urdu",
  ];

  const handleStart = () => {
    console.log(`Starting generation → ${targetLang}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-900 px-4">
      <div className="w-full max-w-5xl bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8 space-y-8 flex flex-col">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-100 tracking-tight">
          Real-Time Captioning
        </h1>

        {/* Target Language Dropdown (Full width, outside the text columns) */}
        <div className="w-full">
          <label className="block text-xs uppercase font-semibold text-gray-400 mb-2">
            Target Language
          </label>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition pr-2"
          >
            {languages.map((lang) => (
              <option key={lang.toLowerCase()} value={lang.toLowerCase()}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Language & Text Sections */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-stretch justify-center transition-all">
          
          {/* Actual Text */}
          <div className="flex flex-col w-full md:w-1/2 bg-gray-900 rounded-xl p-5 shadow transition-all">
            <label className="block text-sm text-gray-500 mb-2 font-medium">
              Actual Text
            </label>
            <textarea
              readOnly
              placeholder="Captions from backend will appear here..."
              className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-100 focus:outline-none focus:border-indigo-600 resize-none transition"
            />
          </div>

          {/* Translated Text */}
          <div className="flex flex-col w-full md:w-1/2 bg-gray-900 rounded-xl p-5 shadow transition-all">
            <label className="block text-sm text-gray-500 mb-2 font-medium">
              Translated Text
            </label>
            <textarea
              readOnly
              placeholder="Translated captions will appear here..."
              className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-100 focus:outline-none focus:border-indigo-600 resize-none transition"
            />
          </div>
        </div>

        {/* Start button */}
        <button
          onClick={handleStart}
          className="w-full md:w-auto self-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition transform hover:scale-[1.03] active:scale-95 duration-150 text-lg"
        >
          Start Generation!
        </button>
      </div>
    </div>
  );
};

export default Translator;
