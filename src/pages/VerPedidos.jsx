import { useState, useEffect } from "react";
import { obtenerRegistros } from "../services/pedidosApi.js";
import PedidoCard from "../components/PedidoCard.jsx";

const VerPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const data = await obtenerRegistros();
        setPedidos(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchPedidos();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-4 text-primary fw-bold border-bottom border-secondary pb-2">
        Solicitudes de MarketMX
      </h2>
      
      <div className="row g-4">
        {pedidos.length === 0 ? (
          <div className="col-12 text-center text-muted mt-5">
            <p>No hay solicitudes registradas aún.</p>
          </div>
        ) : (
          pedidos.map((pedido) => (
            <div className="col-12 col-md-6 col-lg-4" key={pedido._id}>
              <PedidoCard pedido={pedido} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VerPedidos;