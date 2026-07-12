import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearRegistro, actualizarRegistro } from '../services/pedidosApi';

const PedidoForm = ({ pedidoId }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cliente: { nombre: '', email: '', telefono: '' },
    servicioNombre: '',
    mensaje: ''
  });

  useEffect(() => {
    if (pedidoId) {
      fetch(`https://apiclases.inacode.cl/marketing/${pedidoId}`)
        .then(res => res.json())
        .then(data => {
          if (data.datos) {
            setFormData({
              cliente: data.datos.cliente || { nombre: '', email: '', telefono: '' },
              servicioNombre: data.datos.servicioNombre || '',
              mensaje: data.datos.mensaje || ''
            });
          }
        })
        .catch(err => console.error(err));
    }
  }, [pedidoId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['nombre', 'email', 'telefono'].includes(name)) {
      setFormData({ ...formData, cliente: { ...formData.cliente, [name]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payloadFinal = {
      ...formData,
      servicioId: "665f1234567890abcdef1234",
      estado: "nuevo",
      fecha: new Date().toISOString().split('T')[0]
    };

    try {
      if (pedidoId) {
        await actualizarRegistro(pedidoId, payloadFinal);
        alert("Solicitud actualizada con éxito");
      } else {
        await crearRegistro(payloadFinal);
        alert("Solicitud creada con éxito");
      }
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6">
        <form onSubmit={handleSubmit} className="card p-4 bg-dark text-light border-secondary shadow">
          <h4 className="mb-3 text-primary border-bottom border-secondary pb-2">Datos del Cliente</h4>
          <div className="mb-3">
            <label className="form-label small text-muted">Nombre Empresa / Cliente</label>
            <input type="text" name="nombre" className="form-control bg-secondary text-light border-0" placeholder="Ej: Constructora Los Andes" value={formData.cliente.nombre} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label small text-muted">Correo Electrónico</label>
            <input type="email" name="email" className="form-control bg-secondary text-light border-0" placeholder="contacto@empresa.cl" value={formData.cliente.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label small text-muted">Teléfono de Contacto</label>
            <input type="text" name="telefono" className="form-control bg-secondary text-light border-0" placeholder="+56912345678" value={formData.cliente.telefono} onChange={handleChange} required />
          </div>

          <h4 className="my-3 text-primary border-bottom border-secondary pb-2">Detalles del Requerimiento</h4>
          <div className="mb-3">
            <label className="form-label small text-muted">Servicio requerido</label>
            <select name="servicioNombre" className="form-select bg-secondary text-light border-0" value={formData.servicioNombre} onChange={handleChange} required>
              <option value="">Selecciona un servicio...</option>
              <option value="Gestión de Redes Sociales">Gestión de Redes Sociales</option>
              <option value="SEO y Posicionamiento">SEO y Posicionamiento</option>
              <option value="Diseño Web">Diseño Web</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label small text-muted">Mensaje o Descripción</label>
            <textarea name="mensaje" className="form-control bg-secondary text-light border-0" rows="4" placeholder="Describe los requerimientos del proyecto..." value={formData.mensaje} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary fw-bold py-2 shadow-sm">{pedidoId ? 'Guardar Cambios' : 'Enviar Solicitud'}</button>
        </form>
      </div>
    </div>
  );
};

export default PedidoForm;