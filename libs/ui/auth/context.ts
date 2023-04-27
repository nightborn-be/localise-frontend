import { createContext } from 'react';
export interface AuthContextState {
    isLogged: boolean;
    isLoading: boolean;
    userEmail?: string;
    signIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextState | null>(null);
