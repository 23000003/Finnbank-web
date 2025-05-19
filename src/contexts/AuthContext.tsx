import React, { useEffect, useState, createContext, useContext } from "react";
import { AuthContextType } from "../types/interfaces/auth-context.interface";
import { jwtDecode } from "jwt-decode";
import { AuthService } from "../services/auth.service";
import { isTokenExpired } from "../utils/validate-token-expiry";
import { AccountStatusEnum } from "../types/enums/account.enum";

const Auth = createContext<AuthContextType>({
  loading: true,
  isAuthenticated: false,
  username: null,
  userId: null,
  tokenExp: null,
  accountType: null,
  login: async () => false,
  logout: async () => false,
  validateEmail: async () => "",
});

type TokenDecoded = {
  exp: number;
};

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null); //fullname
  const [accountType, setAccountType] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenExp, setTokenExp] = useState<number | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    const accountType = localStorage.getItem("account_type");

    if (token && name && userId && accountType) {
      const { exp } = jwtDecode<TokenDecoded>(token);
      setTokenExp(exp);
      setUsername(name);
      setUserId(userId);
      setAccountType(accountType);
      if (!isTokenExpired(Number(tokenExp))) {
        console.log("Token is valid");
        setIsAuthenticated(true);
      } else {
        console.log("Token expired");
        logout();
      }
    }
  }, [tokenExp]);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const data = await AuthService.login(email, password);
      if (
        data.account_status == AccountStatusEnum.CLOSED ||
        data.account_status == AccountStatusEnum.SUSPENDED
      ) {
        throw new EvalError(
          "Your account is either closed or suspended, please follow the steps to reactivate your account"
        );
      }
      const { access_token, full_name, account_id, account_type } = data;
      const { exp } = jwtDecode<TokenDecoded>(access_token);

      localStorage.setItem("token", access_token);
      localStorage.setItem("username", full_name);
      localStorage.setItem("userId", account_id);
      localStorage.setItem("account_type", account_type);

      setTokenExp(exp);
      setUsername(full_name);
      setIsAuthenticated(true);
      setUserId(String(userId));
      setAccountType(account_type);
      return true;
    } catch (err) {
      console.error("Error logging in:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("account_type");
    setIsAuthenticated(false);
    setAccountType(null);
    setUsername(null);
    setUserId(null);
    setTokenExp(null);
    return true;
  };

  const validateEmail = async (email: string): Promise<string> => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const data = await AuthService.validateEmail(email);
      return data;
    } catch (err) {
      console.error("Error validating email:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Auth.Provider
      value={{
        loading,
        isAuthenticated,
        login,
        logout,
        validateEmail,
        username,
        userId,
        tokenExp,
        accountType,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

export const useAuth = (): AuthContextType => useContext(Auth);
