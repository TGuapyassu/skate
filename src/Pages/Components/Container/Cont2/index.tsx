import styles from './Cont2.module.scss';
import Image1 from 'Img/skt-1.jpg';
import Image2 from 'Img/skt-2.jpg';
import Image3 from 'Img/skt-3.jpeg';
import { Element } from 'react-scroll';
import Background from 'Img/banner-2.jpg';

const Conteudo2 = () => {
  return (
    <div style={{
      backgroundImage: `url(${Background})`
    }} className={styles.cont__2}>
      <Element name='skate' />
      <section className={styles.conteudo__2}>
        <hr className={styles.line} />
        <span className={styles.news}>
          <img className={styles.skt} height='250px' src={Image1} alt="" />
          <p>O skate surgiu na Califórnia, Estados Unidos, nos anos 60. Foi inventado por alguns surfistas,
            como uma brincadeira para um dia no qual não havia ondas no mar. Eles utilizaram rodinhas de
            patins.
            Já em 1965 foram fabricados os primeiros skates e realizados os primeiros campeonatos.
            Mas o esporte só ganhou o mundo nos anos 90, quando o norte-americano Tony Hawk realizou uma
            revolução com seus aéreos e flips. Tony Hawk é considerado, até hoje, o maior skatista de todos
            os tempos.
            O skate é praticado pelas ruas do mundo todo, ou em lugares específicos, como os skate parks.
          </p>
        </span>
        <hr className={styles.line} />
        <span className={styles.news}>
          <img className={styles.skt} height='250px' src={Image2} alt="" />
          <ul>Existem as seguintes modalidades para a prática do skate:
            <li>Freestyle – manobras feitas em sequência, no chão.</li>
            <li>Down Hill – descida de ladeiras na maior velocidade possível.</li>
            <li>Downhill Slide – descida de ladeiras em alta velocidade, realizando manobras de derrapagem.
            </li>
            <li>Vertical - é praticada em pista, e pode ser subdividida em outras modalidades, variando
              sempre
              as condições da pista. As manobras podem ser aéreas ou deslizando pela borda metálica da
              pista.</li>
            <li>Street Style (skate de rua) – na modalidade mais praticada em todo o mundo, os bancos,
              corrimões, escadas das ruas das cidades são utilizadas como obstáculos para o skate.</li>
            <li>Mini-rampas – práticado em rampa que mistura os estilo Street e Vertical (paredes pouco
              inclinadas).</li>
          </ul>
        </span>
        <hr className={styles.line} />
        <span className={styles.news}>
          <img className={styles.skt} height='250px' src={Image3} alt="" />
          <p>Nas competições, só existem duas categorias: a Street (circuito com obstáculos) e a Half Pipe
            (rampa em formato de “U”). As manobras são avaliadas por juizes que atribuem notas considerando
            a dificuldade e a desenvoltura das manobras realizadas.
            Geralmente as competições duram dois dias, sendo que no primeiro dia acontece à fase
            classificatória e no segundo, os melhores skatistas tem duas chances de realizar suas manobras.
            Aquele que somar mais pontos na mesma volta vence.
            A partir dos anos 90, os brasileiros tem tido destaque internacional nas competições. O primeiro
            grande destaque foi Bob Burnquist.</p>
        </span>
      </section>
    </div>
  );
};

export default Conteudo2;