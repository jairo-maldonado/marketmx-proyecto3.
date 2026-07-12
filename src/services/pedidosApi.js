const API_URL = 'https://apiclases.inacode.cl/marketing';

export const obtenerRegistros = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.datos || [];
};

export const crearRegistro = async (registro) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registro),
  });
  return await response.json();
};

export const actualizarRegistro = async (id, registro) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registro),
  });
  return await response.json();
};

export const eliminarRegistro = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};