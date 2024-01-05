import { useState } from "react";
import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from "react-icons/fi";
import { Input } from './../../components/Input';
import { Button } from './../../components/Button/index';
import { useNavigate } from 'react-router-dom'

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import placeholderAvatar from '../../../assets/avatar_placeholder.svg';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderAvatar
    const [avatar, setAvatar]  = useState(avatarUrl)
    const [avatarFile, setAvatarFile]  = useState(null)

    const navigate = useNavigate()

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,

        }
        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }

    function handleBack() {
        navigate(-1) // -1 faz ele voltar a camada ao invés dele adicionar mais uma camada no histórico navegação
      }


    return (
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                    <FiArrowLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt="Foto do usuário"
                    />

                    <label htmlFor="">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />

                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />
                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>

        </Container>
    )
}