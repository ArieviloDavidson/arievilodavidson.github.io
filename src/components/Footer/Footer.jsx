import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© {currentYear} Arievilo Dev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
