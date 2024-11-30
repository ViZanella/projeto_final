import { API } from "../@libs/axios";
import{ Iperfume } from "../@libs/types";

const _ENDPOINT = '/perfumes';


const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: Iperfume) => (API.post(_ENDPOINT, data));
const update = (id: string, data: Iperfume) => (API.put(`${_ENDPOINT}/${id}`, data));
const upload = (file: File) => {
  const formData = new FormData();
  formData.append('file', file)

  return API.post(`${_ENDPOINT}/upload`, formData, {
    headers: {
      'Content-Type': 'mulipart/form-data'
    }
  })
}

export const PerfumeService = {
  getAll,
  create,
  getById,
  update,
  remove,
  upload,
}
