import styles from '../styles/Home.module.css';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
