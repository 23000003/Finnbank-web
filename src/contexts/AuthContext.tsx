import React, { 
    useEffect, 
    useState, 
    createContext, 
    useContext 
} from "react";
import { AuthContextType } from "../types/contexts";

const Auth = createContext<AuthContextType>({
    loading: true,
    isAuthenticated: false,
    login: async () => {},
    logout: async () => {},
});

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }> ) {
    
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    // const [username, setUsername] = useState<string | null>(null);
    // const [email, setEmail] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() =>{

    },[])

    const login = async (email: string, password: string) => {
        console.log('login', email, password);
    }

    const logout = async () => {
        console.log('logout');
    }

    return (
        <Auth.Provider value={{
            loading,
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </Auth.Provider>
    );
}

export const useAuth = () => useContext(Auth);