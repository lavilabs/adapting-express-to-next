import React from "react";
import { UserContext } from "./WebAuthProvider";

const useWebAuth = () => {
  return React.useContext(UserContext);
};

export default useWebAuth;
