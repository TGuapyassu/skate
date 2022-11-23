import styles from './Footer.module.scss';
import { BsFacebook, BsInstagram, BsWhatsapp, BsMailbox } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className={styles.social}>
        <h1>Contatos</h1>
        <a className={styles.insta} target="_blank" href="https://www.instagram.com" rel="noreferrer">
          <BsInstagram /> /AAAAA
        </a>
        <a className={styles.face} target="_blank" href="https://pt-br.facebook.com" rel="noreferrer">
          <BsFacebook /> /BBBBB
        </a>
        <a className={styles.whats} target="_blank" href="tel" rel="noreferrer">
          <BsWhatsapp /> 90000-0000
        </a>
        <a className={styles.email} target="_blank" href="mailto" rel="noreferrer">
          <BsMailbox /> Email@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;