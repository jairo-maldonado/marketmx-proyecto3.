import { Link } from 'react-router-dom';
import { eliminarRegistro } from '../services/pedidosApi.js';

const PedidoCard = ({ pedido }) => {
  if (!pedido) return null;

  const borrar = async () => {
    if (window.confirm("¿Estás seguro de eliminar esta solicitud?")) {
      await eliminarRegistro(pedido._id);
      window.location.reload();
    }
  };

  return (
    <div className="card bg-dark text-light border-secondary h-100 shadow-sm">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title text-primary m-0 fw-bold">{pedido?.cliente?.nombre || 'Sin nombre'}</h5>
            <span className="badge bg-warning text-dark px-2 py-1 small">{pedido?.estado}</span>
          </div>
          <p className="card-text mb-1 small"><strong>Email:</strong> {pedido?.cliente?.email || 'No registrado'}</p>
          <p className="card-text mb-3 small"><strong>Teléfono:</strong> {pedido?.cliente?.telefono || 'No registrado'}</p>
          <hr className="border-secondary my-2" />
          <p className="card-text mb-1"><span className="text-muted small">Servicio solicitado:</span><br /><strong className="text-info">{pedido?.servicioNombre}</strong></p>
          <p className="card-text bg-secondary p-2 rounded text-light small mt-2">{pedido?.mensaje}</p>
        </div>
        <div className="mt-3 pt-2 border-top border-secondary d-flex justify-content-between align-items-center">
          <small className="text-muted">{pedido?.fecha}</small>
          <div className="d-flex gap-2">
            <Link to={`/editar/${pedido?._id}`} className="btn btn-sm btn-outline-primary px-3">Editar</Link>
            <button onClick={borrar} className="btn btn-sm btn-outline-danger px-3">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidoCard;