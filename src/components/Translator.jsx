import React, { useState } from "react";

const Translator = () => {
  const [sourceLang, setSourceLang] = useState("english");
  const [targetLang, setTargetLang] = useState("hindi");

  const languages = [
    "English",
    "Hindi",
    "Bengali",
    "Marathi",
    "Tamil",
    "Telugu",
    "Gujarati",
    "Kannada",
    "Malayalam",
    "Punjabi",
    "Odia",
    "Urdu",
  ];

  const handleStart = () => {
    // Placeholder for backend logic later
    console.log(`Starting generation from ${sourceLang} → ${targetLang}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Start Real-Time Captioning</h1>

      {/* Language & Text Sections */}
      <div className="flex flex-col sm:flex-row gap-10 mb-8 w-full sm:w-auto justify-center">
        {/* Source Language + Actual Text */}
        <div className="flex flex-col items-center">
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {languages.map((lang) => (
              <option key={lang.toLowerCase()} value={lang.toLowerCase()}>
                {lang}
              </option>
            ))}
          </select>

          <label className="block text-sm text-gray-400 mb-2 self-start">
            Actual Text
          </label>
          <textarea
            readOnly
            placeholder="Captions from backend will appear here..."
            className="w-64 sm:w-80 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white resize-none focus:outline-none h-28"
          />
        </div>

        {/* Target Language + Translated Text */}
        <div className="flex flex-col items-center">
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {languages.map((lang) => (
              <option key={lang.toLowerCase()} value={lang.toLowerCase()}>
                {lang}
              </option>
            ))}
          </select>

          <label className="block text-sm text-gray-400 mb-2 self-start">
            Translated Text
          </label>
          <textarea
            readOnly
            placeholder="Translated captions will appear here..."
            className="w-64 sm:w-80 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white resize-none focus:outline-none h-28"
          />
        </div>
      </div>

      {/* Start button */}
      <button
        onClick={handleStart}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md"
      >
        Start Generation!
      </button>
    </div>
  );
};

export default Translator;
