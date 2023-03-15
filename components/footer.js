import Nav from './nav';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <Nav />
        </div>
        <div>
          <p className="copyright">Todos los Derechos Reservados 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
