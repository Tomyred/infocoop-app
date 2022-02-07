import axios from "axios";

const endpoint = "https://parkinglot-server.herokuapp.com/v1/links";

export const load = () => axios.get(endpoint);
export const save = link => axios.post(endpoint, link);
export const update = (link, id) => axios.put(`${endpoint}/${id}`, link);
export const remove = id => axios.delete(`${endpoint}/${id}`);
