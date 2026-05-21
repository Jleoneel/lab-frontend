import api from '../lib/axios';

export const acuerdoService = {
    generar: (quoteId) => {
        return api.get(`/acuerdos/generar/${quoteId}`, { responseType: 'blob' });
    },

    marcarFirmado: (clientId) => {
        return api.patch(`/acuerdos/firmar/${clientId}`);
    },

    getByCliente: (clientId) => {
        return api.get(`/acuerdos/cliente/${clientId}`);
    },
};