import React, { ReactNode, useContext } from 'react';
import { AuthContext, AuthContextState } from './context';
import { useLogic } from './logic';
// Create provider
export function AuthProvider({ children }: { children: ReactNode }) {
    // Attributes
    const auth = useLogic();

    // Render
    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    );
}

// Create hook
export const useAuth = () => useContext(AuthContext) as AuthContextState;
