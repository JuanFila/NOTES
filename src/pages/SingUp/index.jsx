import { useState } from "react";
import { Container, Form, Background} from "./style";
import { FiMail, FiLock, FiUser} from "react-icons/fi"

import {Link } from 'react-router-dom'
import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button/index';
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSingUp =() => {
        if(! name || !email || !password) {
            return alert("Preencha todos os campos")
        }
        
        api.post("/users", {name, email, password})
        .then(() => {
            alert("Cadastrado com sucesso")
            navigate("/")
        }).catch(err => {
            if(err.response){
             alert(err.res.data.message)   
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                placeholder="Nome"
                type= "text"
                icon={FiUser}
                onChange={ e=> setName(e.target.value)}
                />
                <Input
                placeholder="E-mail"
                type= "text"
                icon={FiMail}
                onChange={ e=> setEmail(e.target.value)}
                />
                <Input
                placeholder="Senha"
                type= "password"
                icon={FiLock}
                onChange={ e=> setPassword(e.target.value)}
                />
                
                <Button
                title="Cadastrar"
                onClick ={handleSingUp}
                />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    )
}