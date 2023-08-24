import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { getAdminList } from "../api/api";
import { onUserStateChange } from "../auth/googleAuthProvider";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);
  const isLogin = user !== null;
  const isAuthInfoLoading = user === undefined;
  const isAdminUser = async () => {
    const list = await getAdminList();
    setIsAdmin(list.includes(user.uid));
  };
  useEffect(
    () =>
      onUserStateChange(async (user) => {
        setUser(user);
        if (user) await isAdminUser(user);
      }),
    []
  );
  return (
    <UserContext.Provider value={{ user, isLogin, isAuthInfoLoading, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
