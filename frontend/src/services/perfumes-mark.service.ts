import { API } from "../@libs/axios";
import{IperfumeMark} from"../@libs/types";

const _ENDPOINT = '/perfume-marks';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IperfumeMark) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IperfumeMark) => (API.put(`${_ENDPOINT}/${id}`, data));

export const PerfumeMarkService = {
  getAll,
  create,
  getById,
  update,
  remove,
}
