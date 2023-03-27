import { createContext } from 'react'
export interface AuthContextState {
    isLogged: boolean;
    userEmail?: string;
}

export const AuthContext = createContext<AuthContextState | null>(null)