import api from "./api.js";

export const fetchSweaters = () => {
  return api("/sweaters", { method: "get" });
};

export const addSweater = (bag) => {
  return api("/sweater", { method: "post", body: JSON.stringify(sweater) });
};

export const deleteSweater = (bag) => {
  return api("/sweater", { method: "delete", body: JSON.stringify(sweater) });
};
