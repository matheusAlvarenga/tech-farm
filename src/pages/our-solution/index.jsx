import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/hungry-1.png';
import img2 from '../../assets/home-4.png';
import * as S from './styles';
import { Banner } from '../../components/banner';
import { Divider } from '../../components/divider';
import { Text } from '../../components/text';
import { Card } from '../../components/card';

export function OurSolutionPage() {
  return (
    <S.Wrapper>
      <Header />
      <S.Image1 src={img1} alt="" />
      <Title size="25rem" uppercase>tech farm</Title>
      <Divider height="8rem" />
      <Banner variant>
        Transforme a agricultura urbana conosco!
      </Banner>
      <Divider height="20rem" />
      <S.TextWrapper>
        <Text>
          Descubra como a Tech Farm está revolucionando a agricultura urbana com suas fazendas
          indoor inteligentes. Aproveite ao máximo o espaço disponível nas cidades e produza
          alimentos frescos e sustentáveis o ano todo.
        </Text>
      </S.TextWrapper>
      <Divider height="12rem" />
      <S.Section>
        <S.Image2 src={img2} alt="" />
        <Divider height="4rem" />
        <Title size="20rem" uppercase lineHeight="100%">
          Agricultura Vertical
        </Title>
        <Divider height="4rem" />
        <S.HorizontalSection>
          <Text>
            Em nossas fazendas indoor, combinamos a agricultura vertical com a mais recente
            tecnologia para criar um ambiente ideal para o cultivo de plantas. Nossas estufas
            verticais são projetadas para aproveitar ao máximo o espaço disponível, permitindo
            o cultivo em múltiplos níveis.
          </Text>
          <Text>
            Com sistemas de iluminação LED de última geração, controle de temperatura e umidade
            e irrigação precisa, nossas plantas recebem os nutrientes necessários para crescer
            de forma saudável, independentemente das condições climáticas externas.
          </Text>
        </S.HorizontalSection>
      </S.Section>
      <Divider height="8rem" />
      <Title size="10.5rem">
        Inteligência Artificial Generativa: Maximizando a Produtividade
      </Title>
      <Divider height="8rem" />
      <S.HorizontalSection>
        <Text>
          A inteligência artificial generativa é o coração de nossas fazendas. Utilizando
          algoritmos avançados, nossa IA monitora continuamente as plantas, analisando seus
          estágios de crescimento e adaptando as condições de cultivo para maximizar a
          produtividade.
          <br />
          <br />
          Com base em dados em tempo real, nossa IA ajusta automaticamente
          a quantidade de luz, água e nutrientes fornecidos a cada planta, garantindo um
          crescimento ideal e colheitas abundantes. Ao otimizar o processo de cultivo,
          garantimos que você obtenha produtos frescos, saborosos e nutritivos em todas as
          estações, diretamente no coração da cidade.
        </Text>
        <Text>
          Descubra como a Tech Farm pode transformar sua visão de agricultura urbana. Junte-se
          a nós nesta jornada rumo a um futuro alimentar mais sustentável, onde a inovação e
          a tecnologia se unem para cultivar alimentos saudáveis e acessíveis, mesmo nas áreas
          mais densamente povoadas.
        </Text>
      </S.HorizontalSection>
      <Divider height="8rem" />
      <Title size="10.5rem">
        Nossas fazendas
      </Title>
      <Divider height="8rem" />
      <S.HorizontalSection>
        <Text>
          Com nossas tecnologias conseguimos produzir o equivalente a 700 acres de terra em um
          espaço do tamanho de uma grande loja de varejo. Fazemos a colheita 365 por ano e
          conseguimos condensar o crescimento em cerca de 10 dias para a maioria dos produtos,
          que representa um aumento de 700% no rendimento.
          <br />
          <br />
          Economizamos cerca de 100.000 galões de água por semana, utilizando cerca de 1% da
          terra em comparação com a agricultura tradicional. Regamos nossas plantas diretamente
          pelas raízes e reutilizamos 99% da água que é transpirada pelas plantas.
        </Text>
        <Text>
          O custo para montar nosso armazém de 1000 metros quadrados será de cerca de 5 milhões
          de reais, sendo 42% em equipamento, 10% em canos e purificação de água, 16% em
          instalação, 6% em elétrica e 11% em equipamentos extras e auxiliares
        </Text>
      </S.HorizontalSection>
      <Divider height="8rem" />
      <Footer />
    </S.Wrapper>
  );
}
