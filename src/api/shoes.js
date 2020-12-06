import api from "./api.js";

export const fetchShoes = () => {
  return api("/shoes", { method: "get" });
};

export const addShoes = (shoes) => {
  return api("/shoes", { method: "post", body: JSON.stringify(shoes) });
};

export const deleteShoes = (shoes) => {
  return api("/shoes", { method: "delete", body: JSON.stringify(shoes) });
};
