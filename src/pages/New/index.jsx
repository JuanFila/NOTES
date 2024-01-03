import { Container, Form } from "./style";
import { Header } from './../../components/Header/Header';
import { Input } from './../../components/Input/index';
import { TextArea } from './../../components/TextArea/index';
import { NoteItem } from './../../components/NoteItem/index';
import { Section } from './../../components/Section/index';
import { Button } from './../../components/Button/index'

import { Link } from "react-router-dom";
import { useState } from "react";
export function New() {

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [Tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

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

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título" />
                    <TextArea placeholder="Observações" />

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
                                Tags.map((tag, index) => (
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
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}