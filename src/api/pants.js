import api from "./api.js";

export const fetchPants = () => {
  return api("/pants", { method: "get" });
};

export const addPant = (bag) => {
  return api("/pant", { method: "post", body: JSON.stringify(pant) });
};

export const deletePant = (bag) => {
  return api("/pant", { method: "delete", body: JSON.stringify(pant) });
};
