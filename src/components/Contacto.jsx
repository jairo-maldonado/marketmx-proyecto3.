import React, { useState } from 'react';

function Contacto() {
  const [datos, setDatos] = useState({ nombre: '', email: '', mensaje: '' });
  const [alerta, setAlerta] = useState({ mostrar: false, tipo: '', texto: '' });

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Validación de campos vacíos
    if (datos.nombre.trim() === '' || datos.email.trim() === '' || datos.mensaje.trim() === '') {
      setAlerta({ mostrar: true, tipo: 'danger', texto: 'Por favor, completa todos los campos antes de enviar.' });
      return;
    }

    // Simulación de envío exitoso
    setAlerta({ mostrar: true, tipo: 'success', texto: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' });
    setDatos({ nombre: '', email: '', mensaje: '' }); // Limpia el formulario
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary mb-5 fw-bold">Contáctanos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow border-0 p-4">
              
              {/* Alerta dinámica para la validación */}
              {alerta.mostrar && (
                <div className={`alert alert-${alerta.tipo}`} role="alert">
                  {alerta.texto}
                </div>
              )}

              <form onSubmit={manejarEnvio} noValidate>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre completo</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" value={datos.nombre} onChange={manejarCambio} placeholder="Ej: Jairo Maldonado" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" value={datos.email} onChange={manejarCambio} placeholder="ejemplo@correo.com" />
                </div>
                <div className="mb-4">
                  <label htmlFor="mensaje" className="form-label">¿En qué podemos ayudarte?</label>
                  <textarea className="form-control" id="mensaje" name="mensaje" rows="4" value={datos.mensaje} onChange={manejarCambio} placeholder="Cuéntanos sobre tu negocio..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold py-2">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;