import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/HenriqueBnchn.png"
          alt="Foto do Usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Henrique Bianchini</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine></RiShutDownLine>
      </Logout>
    </Container>

  )
}