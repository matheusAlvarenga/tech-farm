import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/home-1.png';
import img2 from '../../assets/home-2.png';
import img3 from '../../assets/home-3.png';
import img4 from '../../assets/home-4.png';
import img5 from '../../assets/home-5.png';
import * as S from './styles';
import { Banner } from '../../components/banner';
import { Divider } from '../../components/divider';
import { Text } from '../../components/text';
import { Footer } from '../../components/footer';

export function Home() {
  return (
    <S.Wrapper>
      <Header />
      <S.Image1
        src={img1}
        alt=""
      />
      <Title uppercase size="16.4rem">
        estamos
        <br />
        mudando o mundo
      </Title>
      <Divider height="8px" />
      <Banner>
        Uma nova maneira de
        {' '}
        <b>produzir alimentos</b>
        , uma nova maneira de
        {' '}
        <b>matar a fome</b>
        !
      </Banner>
      <S.Image2 src={img2} />
      <S.Section>
        <S.Image3
          src={img3}
          alt=""
        />
        <Title size="10.5rem">
          Utilizando a Tecnologia para
          <br />
          melhorar a agricultura
        </Title>
        <Divider height="3.2rem" />
        <Banner variant>
          Utilizamos IA generativas para aumentar a produtividade de nossas fazendas
        </Banner>
      </S.Section>
      <Divider height="16rem" />
      <S.Section>
        <S.Image4 src={img4} alt="" />
        <Divider height="4rem" />
        <Title size="20rem" uppercase lineHeight="100%">Revolução da agricultura</Title>
      </S.Section>
      <S.HorizontalSection>
        <Text>
          Somos uma empresa inovadora dedicada a revolucionar a forma como a produção de alimentos é
          feita. Utilizamos a agricultura vertical e a inteligência artificial generativa para
          impulsionar a produtividade das fazendas indoor no coração das cidades.
          <br />
          <br />
          Nossa abordagem pioneira combina tecnologia avançada, conhecimentos agrícolas
          especializados e um compromisso incansável com a sustentabilidade. Com a agricultura
          vertical, conseguimos cultivar plantas de forma vertical em múltiplos níveis, maximizando
          o uso do espaço e reduzindo a dependência de terras agrícolas tradicionais. Além disso,
          nossa inteligência artificial generativa permite otimizar o crescimento das plantas,
          fornecendo as condições ideais para o seu desenvolvimento saudável.
        </Text>
        <Text>
          Na Tech Farm, estamos comprometidos em oferecer alimentos frescos, nutritivos e
          cultivados de forma responsável, enquanto reduzimos a pegada ambiental. Nossas
          fazendas indoor estão estrategicamente localizadas nas cidades, trazendo a produção
          agrícola para mais perto dos consumidores e reduzindo significativamente as emissões de
          carbono associadas ao transporte de alimentos.
        </Text>
      </S.HorizontalSection>
      <S.Section>
        <S.Image5 src={img5} alt="" />
        <Title size="20rem" uppercase>
          Entenda mais
          <br />
          sobre
        </Title>
        <S.TextWrapper>
          <Text>
            Assista ao nosso video pitch para aprender um pouco mais sobre
            como utilizamos a tecnologia para mudar o mundo.
            <br />
            <S.StyledLink to="https://youtu.be/g7pWTX2q6eU" target="_blank">Veja nosso video pitch!</S.StyledLink>
          </Text>
        </S.TextWrapper>
      </S.Section>
      <Divider height="8rem" />
      <Footer />
    </S.Wrapper>
  );
}
