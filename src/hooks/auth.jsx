import { createContext, useContext, useState, useEffect } from "react";
import { api } from './../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data;

            localStorage.setItem("@rocktnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocktnotes:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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

    async function updateProfile({ user, avatarFile}) {
        try {

            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);
                
                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            const updatedUserResponse = await api.put("/users", user )
            const updatedUser = updatedUserResponse.data

            localStorage.setItem("@rocktnotes:user", JSON.stringify(updatedUser))

            setData({user: updatedUser, token: data.token})
            alert("Perfil atualizado com sucesso")

        } catch (err) {
            alert("Não foi possível atualizar o perfil")
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocktnotes:token")
        const user = localStorage.getItem("@rocktnotes:user")

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
            updateProfile,
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