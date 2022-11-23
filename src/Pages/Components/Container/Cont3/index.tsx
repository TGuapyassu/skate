import styles from './Cont3.module.scss';
import Image1 from 'Img/tony-1.jpg';
import Image2 from 'Img/tony-2.jpg';
import Image3 from 'Img/tony-3.jpg';
import { Element } from 'react-scroll';
import Background from 'Img/banner.jpg';

const Conteudo3 = () => {
  return (
    <div style={{
      backgroundImage: `url(${Background})`
    }} className={styles.cont__3}>
      <Element name='tony_hawk' />
      <section className={styles.conteudo__3}>
        <hr className={styles.line} />
        <span className={styles.news__2}>
          <img className={styles.skt} height='250px' src={Image1} alt="" />
          <p>Conhecido mundialmente como um dos maiores skatistas da história, Anthony Frank Hawk, mais
            conhecido como Tony Hawk, é um skatista norte-americano responsável por fazer grandes feitos
            neste esporte. <br />
            Em 2014, foi considerado pela FoxWeekly um dos skatistas mais influentes de todos os tempos. Ele
            também foi o primeiro a conseguir realizar a manobra 900, onde ele deu duas voltas e meia no ar
            com o skate. <br />
            No entanto, se você acha que o skate sempre foi a paixão dele, saiba que ele também
            tentou a natação e o baseball quando criança. <br />
            Além disso, a sua carreira também não envolve apenas o skate, onde ele também atua em ações
            sociais e criou a Fundação Tony Hawk, em 2002. Ela já ajudou milhares de jovens a aprender a
            andar de skate e combater o preconceito contra o esporte.
          </p>
        </span>
        <hr className={styles.line} />
        <span className={styles.news__2}>
          <img className={styles.skt} height='250px' src={Image2} alt="" />
          <p>Tony nasceu no dia 12 de maio de 1968, em San Diego, na Califórnia. Possui três irmãos e é casado
            desde 2015. <br />
            Fruto do relacionamento entre o militar Frank P. R. Hawk, que inclusive serviu durante a Segunda
            Guerra Mundial, e Nancy Hawk, uma mulher conhecida por ser muito ativa. <br />
            A relação com o skate começou cedo, logo com nove anos, quando o astro ganhou um skate de fibra
            de seu irmão. Ele ficava treinando em um pequeno beco atrás de sua casa e a sua habilidade foi
            melhorando exponencialmente. <br />
            Três anos depois, ele já era um vencedor e o skate se tornou muito mais que uma brincadeira, mas
            uma profissão. Com 12 anos, ele venceu o Campeonato Amador da Califórnia, com 14 já era
            profissional e bem, com os 16 anos já era considerado o melhor skatista do mundo. <br />
            Com o passar do tempo, as suas acrobacias, recordes e feitos só se acumulavam e com 25 anos Tony
            já havia participado de 103 jogos, dos quais venceu 73 e em 19 conquistou o segundo lugar. <br />
            Inclusive, ele já chegou a vencer 12 campeonatos seguidos, o que chamou a atenção não só do
            pessoal que ama o skate, mas do mundo todo, que sempre parava para assistir as apresentações e
            competições do americano. <br />
            Com isso, a sua fama trouxe também participações de Tony em eventos, programas de TV, redes
            sociais e uma série de outros locais. <br />
            Além disso, ele serviu de inspiração para a criação de uma série de jogos de skate, que
            começaram a ser criados em 1999. <br />
            Atualmente, existem dezenas de jogos que levam o nome do skatista, desde os mais simples de
            consoles antigos até os mais realistas. <br />
            O último jogo em nome de Tony foi a remasterização do jogo Tony Hawk’s Pro Skater. Interessante,
            não é mesmo?
          </p>
        </span>
        <hr className={styles.line} />
        <span className={styles.news__2}>
          <img className={styles.skt} height='250px' src={Image3} alt="" />
          <p>Depois de descobrir quem é Tony Hawk, provavelmente muitas pessoas o chamam de gênio, o que não
            deixa de ser verdade, já que na infância o astro teve o seu QI medido alcançando a média de 144,
            o que indica que a sua inteligência é bem acima da média das outras pessoas. <br />
            Por falar em genialidade, o americano além de fazer as manobras conhecidas com maestria, também
            inovou e criou a 900, que inclusive fez até mesmo com 48 anos de idade! <br />
            Além dessa criação, ele inventou a Mc Hawk, onde realizou duas voltas perfeitas de 360º em cima
            do skate, totalizando 720º de pura emoção, o que também é bastante difícil. <br />
            Se você acha que ele inova “apenas” nas façanhas no skate, saiba que ele também desenvolveu uma
            rampa em formato de looping, que inclusive foi estreada por ele e, claro, fez história de novo. <br />
            Por falar em inovações, dentro do mundo dos negócios Hawk e seu amigo Per Welinder criaram uma
            loja de artigos de skate em 1992, chamada de Birdhouse. <br />
            Além disso, viu uma chance de brilhar mais ainda em 1995, com a criação dos X Games, onde
            estreou a categoria de skate com nada mais nada menos que uma medalha de ouro. <br />
          </p>
        </span>
      </section>
    </div>
  );
};

export default Conteudo3;