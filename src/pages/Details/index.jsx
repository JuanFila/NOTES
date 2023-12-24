import { Container, Links, Content } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from './../../components/ButtonText/index';

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title={"Excluir nota"} />

          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem adipisci reiciendis at perspiciatis dolorum
            voluptatum sit temporibus eaque quidem molestias impedit voluptates sed, repellendus illum vero dicta labore odit cum velit quod accusamus aliquam. Fuga repellendus inventore libero reiciendis facere quaerat ut!</p>
          <Section title={"Link úteis"}>
            <Links>
              <li href="">https://app.rocketseat.com.br/classroom/stage-09</li>
            </Links>
          </Section>

          <Section title={"Marcadores"}>
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}


