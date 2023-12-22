import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img 
                src="https://github.com/JuanFila.png"
                alt="Avatar"
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Juan Fila</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}