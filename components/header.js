import { useRouter } from 'next/router';
import Image from 'next/image';
import Nav from './nav';

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className="header-container">
        <div>
          <Image width={350} height={250} src="/img/logo.svg" alt="Logotipo" />
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
