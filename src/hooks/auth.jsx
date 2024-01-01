import { createContext, useContext, useState, useEffect } from "react";
import { api } from './../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data;

            localStorage.setItem("@rocktnotes:user" , JSON.stringify(user))
            localStorage.setItem("@rocktnotes:token" , token)

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token })

        } catch (err) {
            alert("E-mail ou senha incorretos, tente novamente")
        }
    }

    function singOut() {
        localStorage.removeItem("@rocktnotes:token");
        localStorage.removeItem("@rocktnotes:user");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocktnotes:token")
        const user = localStorage.getItem("@rocktnotes:user")

        if(token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
            signIn,
            singOut,
            user: data.user
             }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { AuthProvider, useAuth }