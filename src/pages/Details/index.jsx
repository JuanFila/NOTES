import { Container } from "./styles.js";
import { Button } from "../../components/Button/index.jsx";

export function Details() {

  return (
    <Container>
      <h1>tese</h1>
      <span>teste2</span>
      <Button title="Entrar" loading />
      <Button title="Voltar"/>
      <Button title="Sair"/>      
    </Container>
  )
}


