import { useRouter } from 'next/router';
import Link from 'next/link';

const Nav = () => {
  const router = useRouter();

  const pathname = router.pathname;

  return (
    <nav className="navegador">
      <Link className={`${pathname == '/' ? 'active' : ''}`} href="/">
        Inicio
      </Link>
      <Link
        className={`${pathname == '/nosotros' ? 'active' : ''}`}
        href="/nosotros"
      >
        Nosotros
      </Link>
      <Link
        className={`${pathname == '/tienda' ? 'active' : ''}`}
        href="/tienda"
      >
        Tienda
      </Link>
      <Link className={`${pathname == '/blog' ? 'active' : ''}`} href="/blog">
        Blog
      </Link>
      <Link
        className={`${pathname == '/carrito' ? 'active' : ''}`}
        href="/carrito"
      >
        <img className="carrito-logo" src="/img/carrito.png" alt="Carrito" />
      </Link>
    </nav>
  );
};

export default Nav;
