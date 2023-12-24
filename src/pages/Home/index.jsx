import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { Header } from './../../components/Header/Header';
import { ButtonText } from './../../components/ButtonText/index';
import { Input } from './../../components/Input/index';
import { Section } from "./../../components/Section/index";
import { Note } from "../../components/Note";

import { FiPlus, FiSearch } from "react-icons/fi";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title={'Todos'} isActive /></li>
                <li><ButtonText title={'Node'} /></li>
                <li><ButtonText title={'React'} /></li>

            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'node' }
                        ]
                    }} />
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}