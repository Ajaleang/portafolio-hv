import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/footer';
import Contact from './pages/Contact';
import Servicios from './pages/Servicios';
import Projects from './pages/Projects';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <Router>
      <div className="bg-cafe text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Projects />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
