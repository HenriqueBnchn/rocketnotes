import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return (
    <Container>

      <Header></Header>

      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Menu>
        <li><ButtonText title="Todos"></ButtonText></li>
        <li><ButtonText title="React"></ButtonText></li>
        <li><ButtonText title="Nodejs"></ButtonText></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              {id: '1', name: 'nodejs'},
              {id: '2', name: 'rocketseat'}
            ]

          }}>  

          </Note>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus></FiPlus>
        Criar Nota
      </NewNote>

    </Container>
  )
}