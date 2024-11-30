import { API } from "../@libs/axios";
import{IperfumeType} from"../@libs/types";

const _ENDPOINT = '/perfume-types';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IperfumeType) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IperfumeType) => (API.put(`${_ENDPOINT}/${id}`, data));


export const PerfumeTypeService = {
  getAll,
  create,
  getById,
  update,
  remove
}
