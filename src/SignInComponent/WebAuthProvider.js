import React, { createContext } from "react";
import auth0 from "auth0-js";

export const UserContext = React.createContext("user");

export default ({ children, domain, clientID }) => {
  const webAuth = React.useRef(
    //the instance of the webauth is passed with useRef from the useWebAuth
    new auth0.WebAuth({
      domain,
      clientID,
      responseType: "token",
    })
  );
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider
      value={{
        webAuth,
        user: user,
        setUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
