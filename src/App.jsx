import './App.css';
import Intro from './components/Intro.jsx';
import Translator from './components/Translator.jsx';
import Footer from './components/Footer.jsx';

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
