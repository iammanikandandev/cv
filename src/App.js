import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import HighlightedProjects from './components/Highlightedprojects';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid p-0">
        <About /><hr className="m-0" />
        <Experience /><hr className="m-0" />
        <Skills /><hr className="m-0" />
        
        
        <HighlightedProjects /><hr className="m-0" />
        <Education /><hr className="m-0" />
      
      </div>


    <a className="whatsapp-button" title="Connect on WhatsApp" rel="noreferrer" href="https://wa.me/919942210770?text=I%20am%20Manikandan%2C%20Senior%20Front-End%20Developer.%20Please%20join%20with%20me." target="_blank" id="whatsappToggle">
      <i className="bi bi-whatsapp"></i>
    </a>

    </div>
  );
}

export default App;
