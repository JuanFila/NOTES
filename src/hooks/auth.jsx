import { createContext, useContext } from "react";
import { api } from './../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password })
            console.log(response)
        } catch(err) {
            if(err.response){
                alert(err.response.data.message)
            }else {
                alert("Não foi possível entrar")
            }
        }
    }

    return (
        <AuthContext.Provider value={ signIn }>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthProvider);

    return context
}

export { AuthProvider, useAuth }