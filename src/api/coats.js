import api from "./api.js";

export const fetchCoats = () => {
  return api("/coats", { method: "get" });
};

export const addCoat = (coat) => {
  return api("/coat", { method: "post", body: JSON.stringify(coat) });
};

export const deleteCoat = (coat) => {
  return api("/coat", { method: "delete", body: JSON.stringify(coat) });
};
