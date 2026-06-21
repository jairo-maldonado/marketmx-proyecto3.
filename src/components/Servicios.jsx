import React, { useState } from 'react';

function Servicios() {
  const [servicioActivo, setServicioActivo] = useState({ titulo: '', descripcion: '' });

  const listaServicios = [
    { id: 1, titulo: 'SEO', descripcion: 'Auditoría técnica, optimización on-page y link building para asegurar que tu sitio web domine los primeros resultados de búsqueda.', icono: '🔍' },
    { id: 2, titulo: 'SEM', descripcion: 'Gestión de presupuesto y creación de anuncios altamente rentables en buscadores y plataformas de pago por clic.', icono: '💰' },
    { id: 3, titulo: 'Redes Sociales', descripcion: 'Estrategias de contenido orgánico y campañas publicitarias en plataformas clave para fidelizar a tu audiencia.', icono: '📱' }
  ];

  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary mb-5 fw-bold">Nuestros Servicios</h2>
        <div className="row g-4">
          {listaServicios.map((servicio) => (
            <div className="col-md-4" key={servicio.id}>
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <div className="display-4 mb-3">{servicio.icono}</div>
                <h3 className="card-title h4">{servicio.titulo}</h3>
                <button 
                  className="btn btn-outline-primary mt-auto"
                  data-bs-toggle="modal" 
                  data-bs-target="#modalServicio"
                  onClick={() => setServicioActivo(servicio)}
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="modal fade" id="modalServicio" tabIndex="-1" aria-labelledby="modalServicioLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="modalServicioLabel">Servicio de {servicioActivo.titulo}</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body py-4">
              <p className="fs-5">{servicioActivo.descripcion}</p>
              <hr />
              <p className="text-muted small">En MarketMX personalizamos esta estrategia según los objetivos de tu negocio.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <a href="#contacto" className="btn btn-primary" data-bs-dismiss="modal">Cotizar ahora</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;