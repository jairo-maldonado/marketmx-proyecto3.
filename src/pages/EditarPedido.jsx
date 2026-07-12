import { useParams } from "react-router-dom";
import PedidoForm from "../components/PedidoForm.jsx";

const EditarPedido = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Editar Solicitud</h2>
      <PedidoForm pedidoId={id} />
    </div>
  );
};

export default EditarPedido;