import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <h5 className="mb-2 text-primary fw-bold">MarketMX</h5>
        <p className="mb-3">Agencia de Marketing Digital</p>
        
        <div className="mb-3 text-light">
          <p className="mb-1">📍 Ubicación: Renca, Santiago</p>
        </div>

        <hr className="border-secondary" />
        
        <p className="mb-0 small text-secondary">
          © 2026 MarketMX. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;