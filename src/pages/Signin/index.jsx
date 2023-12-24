import { Container, Form, Background} from "./style";
import {FiLogIn, FiMail, FiLock} from "react-icons/fi"

import { Input } from './../../components/Input/index';
import { Button } from './../../components/Button/index';

export function Signin() {
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input
                placeholder="E-mail"
                type= "text"
                icon={FiMail}
                />
                <Input
                placeholder="Senha"
                type= "password"
                icon={FiLock}
                />

                <Button
                title="Login"
                />

                <a href="#">
                    Criar conta
                </a>
            </Form>

            <Background/>
        </Container>
    )
}