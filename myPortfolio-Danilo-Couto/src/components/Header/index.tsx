import NavLink from 'src/components/Header/NavLink';
import { SContainer } from 'src/components/Header/styles';

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
