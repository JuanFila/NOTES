import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const { singOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderAvatar
    const navigation = useNavigate()

    function handleSingOut(){
        navigation("/");
        singOut();
    }

    return (
        <Container>
            <Profile to="/profile">
                <img
                    src={avatarUrl}
                    alt={user.name}
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSingOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}