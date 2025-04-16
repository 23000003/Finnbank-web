import React, { useEffect, useState, createContext, useContext } from "react";
import { AuthContextType } from "../types/contexts.types";

const Auth = createContext<AuthContextType>({
  loading: true,
  isAuthenticated: false,
  email: null,
  username: null,
  userId: null,
  login: async () => false,
  logout: async () => false,
});

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    setLoading(false);
    // Fetch from localstorage
  }, []);

  const login = async (email: string, password: string) => {
    // call api here
    console.log("login", email, password);
    setIsAuthenticated(true);
    setUsername("Kenny");
    setEmail(email);
    setUserId(1);
    return true;
  };

  const logout = async () => {
    // remove from localstorage
    setIsAuthenticated(false);
    setUsername(null);
    setEmail(null);
    setUserId(null);
    window.location.reload();
    return true;
  };

  return (
    <Auth.Provider
      value={{
        loading,
        isAuthenticated,
        login,
        logout,
        email,
        username,
        userId,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

export const useAuth = (): AuthContextType => useContext(Auth);
