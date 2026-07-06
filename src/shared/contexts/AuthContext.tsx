import React, { createContext, useCallback, useContext, useMemo, useState } from "react";


interface IAuthContextProps {
    email: string | undefined;
    accessToken: string | undefined;

    logout(): void;
    login(email: string, password: string): void;
}

const AuthContext = createContext({} as IAuthContextProps);


export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [accessToken, setAccessToken] = useState<string>();
    const [email, setEmail] = useState<string>();

    const logout = useCallback(() => {
        setEmail(undefined);
        setAccessToken(undefined);
    }, [])

    const login = useCallback((email: string, password: string) => {

        // Chamar o backend para fazer a autenticação

        setEmail(email);
        setAccessToken(crypto.randomUUID());
    }, [])  // o useCallback declara e armazena a função, ajuda na performace quando lidamos com context


    const detailsUser = useMemo(() => {
        return `O seu Email é ${email}`
    }, []) // O useMemo executa a função e armazena o valor que foi retornado


    return (
        <AuthContext.Provider value={{ logout, login, email, accessToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}


export const useIsAuthenticated = () => {
    const { accessToken } = useAuthContext();

    return accessToken !== undefined;
}