import { createContext } from 'react';
export interface AuthContextState {
    isLogged: boolean;
    isAuthLoading: boolean;
    isLoading: boolean;
    userEmail?: string;
    setIsLoading: (value: boolean) => void;
    signIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextState | null>(null);
