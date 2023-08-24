import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { onUserStateChange } from "../auth/googleAuthProvider";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const isLogin = user !== null;
  const isAuthInfoLoading = user === undefined;
  useEffect(() => onUserStateChange(setUser), []);
  return (
    <UserContext.Provider value={{ user, isLogin, isAuthInfoLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
