import api from "./api.js";

export const fetchJackets = () => {
  return api("/jackets", { method: "get" });
};

export const addJacket = (jacket) => {
  return api("/jacket", { method: "post", body: JSON.stringify(jacket) });
};

export const deleteJacket = (jacket) => {
  return api("/jacket", { method: "delete", body: JSON.stringify(jacket) });
};
