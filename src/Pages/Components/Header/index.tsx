import styles from './Header.module.scss';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <h1 className={styles.t}>Black Street <br /> Skate</h1>
      <nav className={styles.menu}>
        <Link to='home' className={styles.menu_item} spy={true} smooth={true} duration={500} >Home</Link>
        <Link to='skate' className={styles.menu_item} spy={true} smooth={true} duration={500} >Skate</Link>
        <Link to='tony_hawk' className={styles.menu_item} spy={true} smooth={true} duration={500} >Tony Hawk</Link>
      </nav>
    </header>
  );
};

export default Header;