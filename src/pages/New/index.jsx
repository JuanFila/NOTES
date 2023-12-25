import { Container, Form } from "./style";
import { Header } from './../../components/Header/Header';
import { Input } from './../../components/Input/index';
import { TextArea } from './../../components/TextArea/index';
import { NoteItem } from './../../components/NoteItem/index';
import { Section } from './../../components/Section/index';
import { Button} from './../../components/Button/index'

import { Link } from "react-router-dom";
export function New() {
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
                        <NoteItem value="https://app.rocketseat.com.br/classroom/stage-09/group/desenvolvendo-aplicacao/lesson/estilizando-o-note-item-1" />
                        <NoteItem value="" isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React" />
                            <NoteItem value="" isNew placeholder="Nova tag" />
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}