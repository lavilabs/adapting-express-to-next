import api from "./api.js";

export const fetchCardigans = () => {
  return api("/cardigans", { method: "get" });
};

export const addCardigan = (bag) => {
  return api("/cardigan", { method: "post", body: JSON.stringify(cardigan) });
};

export const deleteCardigan = (bag) => {
  return api("/cardigan", { method: "delete", body: JSON.stringify(cardigan) });
};
