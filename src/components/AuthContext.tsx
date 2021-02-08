import React, { createContext, useContext, useState } from "react";

type AuthContextValue = {
  auth: boolean;
  setAuth: (val: boolean) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => useContext(AuthContext);
export default useAuthContext;
