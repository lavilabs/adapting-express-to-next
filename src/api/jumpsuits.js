import api from "./api.js";

export const fetchJumpsuits = () => {
  return api("/jumpsuits", { method: "get" });
};

export const addJumpsuit = (jumpsuit) => {
  return api("/jumpsuit", { method: "post", body: JSON.stringify(jumpsuit) });
};

export const deleteJumpsuit = (jumpsuit) => {
  return api("/jumpsuit", { method: "delete", body: JSON.stringify(jumpsuit) });
};
