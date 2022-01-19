import axios from "axios";

const endpoint = "https://parkinglot-server.herokuapp.com/v1/rates";

export const load = () => axios.get(endpoint);
export const save = rate => axios.post(endpoint, rate);
export const update = (rate, id) => axios.put(`${endpoint}/${id}`, rate);
export const remove = id => axios.delete(`${endpoint}/${id}`);
