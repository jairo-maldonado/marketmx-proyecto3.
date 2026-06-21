import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Casos from './components/Casos';
import Procesos from './components/Procesos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Hero />
      <Servicios />
      <Casos />
      <Procesos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;