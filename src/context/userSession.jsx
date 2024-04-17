import { createContext, useState } from "react";

export const UserSessionContext = createContext();

export const UserSessionProvider = ({ children }) => {
  const [userSession, setUserSession] = useState({});

  return (
    <UserSessionContext.Provider
      value={{
        userSession,
        setUserSession,
      }}
    >
      {children}
    </UserSessionContext.Provider>
  );
};