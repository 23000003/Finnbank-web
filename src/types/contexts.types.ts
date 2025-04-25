export type AuthContextType = {
  loading: boolean;
  isAuthenticated: boolean;
  username: string | null;
  userId: string | null;
  tokenExp: number | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
};

export type Context = {
  auth: AuthContextType;
};
