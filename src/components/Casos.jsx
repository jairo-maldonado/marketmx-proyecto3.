import React from 'react';

function Casos() {
  const listaCasos = [
    { id: 1, cliente: 'App MACH', resultado: '+250% Descargas de la App', imagen: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80' },
    { id: 2, cliente: 'GoodMeal', resultado: '100k Usuarios activos al mes', imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' },
    { id: 3, cliente: 'Awto Chile', resultado: '+400% Reservas en Santiago', imagen: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <section id="casos" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center text-primary mb-5 fw-bold">Casos de Éxito Local</h2>
        <div className="row g-4">
          {listaCasos.map((caso) => (
            <div className="col-md-4" key={caso.id}>
              <div className="card h-100 border-0 shadow-sm overflow-hidden">
                <img 
                  src={caso.imagen} 
                  className="card-img-top" 
                  alt={`Caso de éxito ${caso.cliente}`} 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{caso.cliente}</h5>
                  <p className="card-text text-success fw-bold fs-5">{caso.resultado}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Casos;