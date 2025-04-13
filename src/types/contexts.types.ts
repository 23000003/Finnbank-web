export type AuthContextType = {
  loading: boolean;
  isAuthenticated: boolean;
  email: string | null;
  username: string | null;
  userId: number | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
};

export type Context = {
  auth: AuthContextType;
};
