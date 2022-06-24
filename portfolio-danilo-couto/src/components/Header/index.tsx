import ChangeThemeMode from '../ChangeThemeMode';
import NavLink from './NavLink';
import { Container } from './styles';

function Header({ changeMode }) {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre" path="/sobre" includes />
        {/* <NavLink title="Contato" path="/contact" includes /> */}
        <ChangeThemeMode changeMode={changeMode} />
      </ul>
    </Container>
  );
}

export default Header;
