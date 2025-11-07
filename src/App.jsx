import './App.css';
import Intro from './components/Intro.jsx';
import Translator from './components/Translator.jsx';
import Footer from './components/Footer.jsx';

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
    <>
      <Intro />
      <div id="translator-section">
        <Translator />
      </div>
      <Footer />
    </>
  );
}

export default App;
