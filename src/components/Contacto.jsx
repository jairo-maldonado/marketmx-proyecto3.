import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !whatsapp || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert('Mensaje enviado correctamente.');
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4 text-primary fw-bold">Contáctanos</h2>
      
      <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body p-4 text-start">
          <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Ej: Jairo Maldonado"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="ejemplo@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">WhatsApp / Teléfono</label>
              <input 
                type="tel" 
                className="form-control" 
                placeholder="Ej: +56 9 1234 5678"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">¿En qué podemos ayudarte?</label>
              <textarea 
                className="form-control" 
                rows="3" 
                placeholder="Cuéntanos sobre tu negocio..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Enviar Mensaje
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;