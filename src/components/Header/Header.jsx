import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";
import { api } from '../../services/api';

export function Header() {
    const { singOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderAvatar

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

            <Logout onClick={singOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}