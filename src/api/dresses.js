import api from "./api.js";

export const fetchDresses = () => {
  return api("/dresses", { method: "get" });
};

export const addDress = (dress) => {
  return api("/dress", { method: "post", body: JSON.stringify(dress) });
};

export const deleteDress = (dress) => {
  return api("/dress", { method: "delete", body: JSON.stringify(dress) });
};
