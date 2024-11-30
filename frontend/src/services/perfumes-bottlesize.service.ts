import { API } from "../@libs/axios";
import{IperfumeBottlesize} from"../@libs/types";

const _ENDPOINT = '/perfume-bottlesizes';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IperfumeBottlesize) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IperfumeBottlesize) => (API.put(`${_ENDPOINT}/${id}`, data));

export const PerfumeBottlesizeService = {
  getAll,
  create,
  getById,
  update,
  remove
}
