import React, { useEffect, useState, createContext, useContext } from "react";
import { AuthContextType } from "../types/contexts.types";
import { jwtDecode } from "jwt-decode";
import { AccountService } from "../services/account.service";

const Auth = createContext<AuthContextType>({
  loading: true,
  isAuthenticated: false,
  username: null,
  userId: null,
  tokenExp: null,
  login: async () => false,
  logout: async () => false,
});

type TokenDecoded = {
  exp: number;
};

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [username, setUsername] = useState<string | null>(null); //fullname
  const [userId, setUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [tokenExp, setTokenExp] = useState<number | null>(null);

  useEffect(() => {
    setLoading(false);
    // Fetch from localstorage
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log(email, password);
      const data = await AccountService.login(email, password);
      const { exp } = jwtDecode<TokenDecoded>(data.access_token);
      setTokenExp(exp);
      setIsAuthenticated(true);
      setUsername("Kenny");
      setUserId(1);
      return true;
    } catch (err) {
      console.error("Error logging in:", err);
      return false;
    }
  };

  const logout = async () => {
    // remove from localstorage
    setIsAuthenticated(false);
    setUsername(null);
    setUserId(null);
    setTokenExp(null);
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
        username,
        userId,
        tokenExp,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

export const useAuth = (): AuthContextType => useContext(Auth);
