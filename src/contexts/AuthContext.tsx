import React, { useEffect, useState, createContext, useContext } from "react";
import { AuthContextType } from "../types/contexts.types";
import { jwtDecode } from "jwt-decode";
import { AccountService } from "../services/account.service";
import { showToast } from "../utils/toast";

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
    const tokenExp = localStorage.getItem("tokenExp");

    if (token && name && userId && tokenExp) {
      setIsAuthenticated(true);
      setUsername(name);
      setUserId(userId);
      setTokenExp(Number(tokenExp));
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log(email, password);
      const data = await AccountService.login(email, password);
      const { access_token: token, full_name: name, account_id: userId } = data.data;
      const { exp } = jwtDecode<TokenDecoded>(token);

      localStorage.setItem("token", token);
      localStorage.setItem("username", name);
      localStorage.setItem("userId", String(userId));
      localStorage.setItem("tokenExp", String(exp));

      setTokenExp(exp);
      setIsAuthenticated(true);
      setUsername(name);
      setUserId(String(userId));
      return true;
    } catch (err) {
      console.error("Error logging in:", err);
      showToast.error("Login Failed");
      throw new Error("Bad Request");
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExp");
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
