import api from "./api.js";

export const fetchBlouses = () => {
  return api("/blouses", { method: "get" });
};

export const addBlouse = (bag) => {
  return api("/blouse", { method: "post", body: JSON.stringify(blouse) });
};

export const deleteBlouse = (bag) => {
  return api("/blouse", { method: "delete", body: JSON.stringify(blouse) });
};
