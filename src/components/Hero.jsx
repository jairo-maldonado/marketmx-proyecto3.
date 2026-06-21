import React from 'react';

function Hero() {
  const heroStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={heroStyle} className="text-white text-center">
      <div className="container">
        <h1 className="display-3 fw-bold mb-4">Impulsamos tu Marca al Siguiente Nivel</h1>
        <p className="lead mb-5 fs-3">Estrategias SEO, SEM y Redes Sociales diseñadas para el éxito de tu negocio.</p>
        <a href="#servicios" className="btn btn-primary btn-lg px-5 py-3 fw-bold">Descubre Cómo</a>
      </div>
    </div>
  );
}

export default Hero;