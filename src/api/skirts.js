import api from "./api.js";

export const fetchSkirts = () => {
  return api("/skirts", { method: "get" });
};

export const addSkirt = (bag) => {
  return api("/skirt", { method: "post", body: JSON.stringify(skirt) });
};

export const deleteSkirt = (bag) => {
  return api("/skirt", { method: "delete", body: JSON.stringify(skirt) });
};
