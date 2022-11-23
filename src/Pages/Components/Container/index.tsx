import styles from './Container.module.scss';
import { Element } from 'react-scroll';
import Background from 'Img/banner-3.jpg';
import Conteudo2 from './Cont2';
import Conteudo3 from './Cont3';

const Container = () => {
  return (
    <main className={styles.container}>
      <div style={{
        backgroundImage: `url(${Background})`
      }} className={styles.banner}>
        <Element name='home' />
        <section className={styles.conteudo__1}>
          <h1>Bem Vindos Ao Black Street Skate!!</h1>
          <br />
          <h2>Portal de Notícias Sobre Skate</h2>
        </section>
      </div>
      <Conteudo2 />
      <Conteudo3 />
    </main>
  );
};

export default Container;