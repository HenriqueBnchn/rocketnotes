import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";


export function Details() {
  return (
    <Container>
      <Header></Header>

      <main>
        <Content>

          <ButtonText title="Excluir Nota"></ButtonText>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis quas. Odit ab vitae, ipsa sequi vel dolorum provident asperiores rerum velit! Aliquid distinctio repudiandae unde. Commodi at incidunt veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia et reiciendis laudantium voluptates ea placeat voluptatem iusto eum! Libero sunt cumque porro maiores mollitia necessitatibus illum possimus, impedit omnis.
          </p>

          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://google.com</a></li>
              <li><a href="#">https://google.com</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="node"></Tag>
          </Section>

          <Button title="Voltar" />


        </Content>
      </main>
    </Container>
  );
}
