import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { educationData } from './data/educationData';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Achievements from './pages/Achievements';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/education" element={<Education education={educationData}/>}/>
            <Route path='/certificate' element={<Certificates/>}/>
            <Route path='/achievement' element={<Achievements/>}/>
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
