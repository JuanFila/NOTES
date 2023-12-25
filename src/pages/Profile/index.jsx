import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from "react-icons/fi";
import { Input } from './../../components/Input';
import { Button } from './../../components/Button/index';
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                  <img 
                  src="https://github.com/JuanFila.png" 
                  alt="Foto do usuário" 
                  />

                  <label htmlFor="">

                    <FiCamera/>

                    <input
                    id="avatar"
                    type="file"
                    />

                  </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Salvar" />
            </Form>

        </Container>
    )
}