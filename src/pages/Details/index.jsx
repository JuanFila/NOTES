import { Container, Links, Content } from "./styles.js";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from './../../components/ButtonText/index';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../../services/api.js";

export function Details() {
  const navigate = useNavigate()

  const [data, setData] = useState(null);

  const params = useParams();

  function handleBack() {
    navigate("/")
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }
    fetchNotes()
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText title={"Excluir nota"} />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>
            {
              data.links &&
              <Section title={"Link úteis"}>
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }
            {
              data.tags &&
              <Section title={"Marcadores"}>
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name} />
                  ))
                }
              </Section>
            }
            <Button
              title="Voltar"
              onClick={handleBack}
            />
          </Content>
        </main>
      }
    </Container>
  )
}


