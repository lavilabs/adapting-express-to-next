import api from "./api.js";

export const fetchBags = () => {
  return api("/bags", { method: "get" });
};

export const addBag = (bag) => {
  return api("/bag", { method: "post", body: JSON.stringify(bag) });
};

export const deleteBag = (bag) => {
  return api("/bag", { method: "delete", body: JSON.stringify(dress) });
};
