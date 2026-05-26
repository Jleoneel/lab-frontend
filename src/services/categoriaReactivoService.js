import api from '../lib/axios';

export const categoriaReactivoService = {
  getAll: async () => {
    const response = await api.get('/categorias-reactivo');
    const data = response.data || response;
    return { data: Array.isArray(data) ? data : [] };
  },
  create: async (nombre) => {
    const response = await api.post('/categorias-reactivo', { nombre });
    return { data: response.data || response };
  },
  update: async (id, data) => {
    const response = await api.patch(`/categorias-reactivo/${id}`, data);
    return { data: response.data || response };
  },
  delete: (id) => api.delete(`/categorias-reactivo/${id}`)
};