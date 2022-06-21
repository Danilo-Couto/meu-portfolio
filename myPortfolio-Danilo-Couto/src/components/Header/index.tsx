import NavLink from './NavLink';
import { SContainer } from './styles';

function Header() {
  return (
    <SContainer>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projects" path="/projects" includes />
      </ul>
    </SContainer>
  );
}

export default Header;
