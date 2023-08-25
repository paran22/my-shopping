import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { getAdmins } from "../api/api";
import { onUserStateChange } from "../auth/googleAuthProvider";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);
  const isLogin = user !== null;
  const isAuthInfoLoading = user === undefined;
  useEffect(
    () =>
      onUserStateChange(async (user) => {
        setUser(user);
        if (user) {
          const isAdmin = await isAdminUser(user);
          setIsAdmin(isAdmin);
        }
      }),
    []
  );
  return (
    <AuthContext.Provider value={{ user, isLogin, isAuthInfoLoading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

async function isAdminUser(user) {
  const list = await getAdmins();
  return list.includes(user.uid);
}

export const useAuthContext = () => useContext(AuthContext);
