import api from "./api.js";

export const fetchTshirts = () => {
  return api("/tshirts", { method: "get" });
};

export const addTshirt = (tshirt) => {
  return api("/tshirt", { method: "post", body: JSON.stringify(tshirt) });
};

export const deleteTshirt = (tshirt) => {
  return api("/tshirt", { method: "delete", body: JSON.stringify(tshirt) });
};
