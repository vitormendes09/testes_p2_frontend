import api from "../services/axisos-instance";

const cursoController = {
    async findAll() {
      const response = await api.get("/curso");
      return response.data;
    },
    async findName(nome: string) {
      const response = await api.get(`/curso/${nome}`);
      return response.data;
    },
  };