import { createContext } from 'react';
import UserCredential from '@firebase/auth';
export interface AuthContextState {
    isLogged: boolean;
    userEmail?: string;
    signIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextState | null>(null);
