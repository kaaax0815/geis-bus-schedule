import footerStyles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <a href="https://kaaaxcreators.de/impressum" title="Impressum" rel="noopener noreferrer">
        Impressum{' '}
      </a>
      <a
        href="https://kaaaxcreators.de"
        target="_blank"
        title="Bernd Storath - Programmierer"
        rel="noopener noreferrer">
        Powered by{' '}
        <img
          src="https://kaaaxcreators.de/img/sizes/favicon.svg"
          alt="kaaaxcreators Logo"
          className={footerStyles.logo}
        />
      </a>
      <a href="#top">Nach oben</a>
      <a
        href="https://kaaaxcreators.de/datenschutz"
        title="Datenschutzerklärung"
        rel="noopener noreferrer">
        Datenschutzerklärung{' '}
      </a>
    </footer>
  );
};

export default Footer;
