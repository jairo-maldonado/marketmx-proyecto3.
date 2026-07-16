import { Routes, Route } from 'react-router-dom'; // 1. Importa esto
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Casos from './components/Casos';
import Procesos from './components/Procesos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import VerPedidos from './pages/VerPedidos';
import AgregarPedido from './pages/AgregarPedido';
import EditarPedido from './pages/EditarPedido';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Servicios />
            <Casos />
            <Procesos />
            <Contacto />
          </>
        } />
        <Route path="/pedidos" element={<VerPedidos />} />
        <Route path="/agregar" element={<AgregarPedido />} />
        <Route path="/editar/:id" element={<EditarPedido />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;