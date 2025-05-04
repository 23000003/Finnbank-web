import React, { useEffect, useState, createContext, useContext } from "react";
import { AuthContextType } from "../types/interfaces/auth-context.interface";
import { jwtDecode } from "jwt-decode";
import { AuthService } from "../services/auth.service";
import { isTokenExpired } from "../utils/validate-token-expiry";

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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null); //fullname
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [tokenExp, setTokenExp] = useState<number | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");

    if (token && name && userId) {
      const { exp } = jwtDecode<TokenDecoded>(token);
      setTokenExp(exp);
      setUsername(name);
      setUserId(userId);
      if (!isTokenExpired(Number(tokenExp))) {
        console.log("Token is valid");
        setIsAuthenticated(true);
      } else {
        console.log("Token expired");
        logout();
      }
    }
    setLoading(false);
  }, [tokenExp]);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const data = await AuthService.login(email, password);
      const { access_token: token, full_name: name, account_id: userId } = data;
      const { exp } = jwtDecode<TokenDecoded>(token);

      localStorage.setItem("token", token);
      localStorage.setItem("username", name);
      localStorage.setItem("userId", userId);

      setTokenExp(exp);
      setLoading(false);
      setUsername(name);
      setIsAuthenticated(true);
      setUserId(String(userId));
      return true;
    } catch (err) {
      console.error("Error logging in:", err);
      throw new Error("User does not exists.");
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    setUsername(null);
    setUserId(null);
    setTokenExp(null);
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
