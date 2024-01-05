import { Container, Form } from "./style";
import { Header } from './../../components/Header/Header';
import { Input } from './../../components/Input/index';
import { TextArea } from './../../components/TextArea/index';
import { NoteItem } from './../../components/NoteItem/index';
import { Section } from './../../components/Section/index';
import { Button } from './../../components/Button/index'
import { useNavigate } from 'react-router-dom'

import { useState } from "react";
import { api } from "../../services/api";
import { ButtonText } from "./../../components/ButtonText/index";

export function New() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate()

    function handleAddLink() {
        if (newLink !== "") {
            setLinks(prevState => [...prevState, newLink])
            setNewLink("")
        } else {
            alert("Insira um link valido")
        }
    }
    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag() {

        if (newTag !== "") {
            setTags(prevState => [...prevState, newTag])
            setNewTag("");
        } else {
            alert("Insira uma tag valida")
        }

    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        if(!title){
            return alert("Digite o título da nota")
        }
        if(newLink){
            return alert("Você deixou um link no campo para adicionar mas não clicou em adicionar")
        }
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar mas não clicou em adicionar")
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })
        alert("Nota criada com sucesso!")
        navigate(-1)
    }

    function handleBack() {
        navigate(-1)
      }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText 
                        title="Voltar"
                        onClick={handleBack}
                        />
                    </header>
                    <Input
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextArea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Link úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => { handleRemoveLink(link) }}
                                />
                            ))
                        }
                        <NoteItem
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            isNew
                            placeholder="Novo link"
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem
                                value={newTag}
                                isNew
                                placeholder="Nova tag"
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <Button 
                    title="Salvar"
                    onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )
}