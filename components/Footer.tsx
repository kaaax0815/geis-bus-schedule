import React from 'react';

import footerStyles from '../styles/Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    const currentPos = window.pageYOffset;
    let start: number | null = null;
    const time = 250;
    const pos = 0;
    window.requestAnimationFrame(function step(currentTime) {
      start = !start ? currentTime : start;
      const progress = currentTime - start;
      if (currentPos < pos) {
        window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
      } else {
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
      }
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    });
  };
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
      <a onClick={scrollToTop} href="#top">
        Nach oben
      </a>
      <a
        href="https://kaaaxcreators.de/datenschutz"
        title="Datenschutzerklärung"
        rel="noopener noreferrer">
        Datenschutzerklärung{' '}
      </a>
    </footer>
  );
}
