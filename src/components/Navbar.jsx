import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">MarketMX</Link>
        <div className="navbar-nav ms-auto flex-row gap-3">
          <Link className="nav-link" to="/pedidos">Ver Solicitudes</Link>
          <Link className="nav-link btn btn-primary text-white px-3" to="/agregar">Nueva Solicitud</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;