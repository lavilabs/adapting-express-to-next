import api from "./api.js";

export const fetchShorts = () => {
  return api("/shorts", { method: "get" });
};

export const addShorts = (bag) => {
  return api("/shorts", { method: "post", body: JSON.stringify(shorts) });
};

export const deleteShorts = (bag) => {
  return api("/shorts", { method: "delete", body: JSON.stringify(shorts) });
};
