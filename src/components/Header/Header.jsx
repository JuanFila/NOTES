import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";

export function Header() {
    const { singOut } = useAuth()
    return (
        <Container>
            <Profile to="/profile">
                <img
                    src="https://github.com/JuanFila.png"
                    alt="Avatar"
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Juan Fila</strong>
                </div>
            </Profile>

            <Logout onClick={singOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}