import Link from 'next/link';
import { useRouter } from 'next/router';
import { INavLinkProps } from 'src/Utils/interfaces';
import { SNavLinkContainer } from 'src/components/Header/styles';

export default function NavLink({
  title,
  path,
  includes = false
}: INavLinkProps) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) return router.pathname.includes(path);
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();

  return (
    <SNavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </SNavLinkContainer>
  );
}
