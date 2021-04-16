import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a
        className={footerStyles.item}
        href="https://kaaaxcreators.de/impressum"
        title="Impressum"
        rel="noopener noreferrer">
        Impressum{' '}
      </a>
      <a
        className={footerStyles.item}
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
      <a className={footerStyles.item} href="#top">
        Nach oben
      </a>
      <a
        className={footerStyles.item}
        href="https://kaaaxcreators.de/datenschutz"
        title="Datenschutzerklärung"
        rel="noopener noreferrer">
        Datenschutzerklärung{' '}
      </a>
    </footer>
  );
};

export default Footer;
