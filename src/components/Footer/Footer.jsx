import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
          <p className="footer-tagline">Building digital experiences</p>
        <div className="footer-divider"></div>
        <p className="footer-copyright">&copy; {currentYear} Kholid. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
