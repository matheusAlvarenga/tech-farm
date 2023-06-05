import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/hungry-1.png';
import * as S from './styles';
import { Banner } from '../../components/banner';
import { Divider } from '../../components/divider';
import { Text } from '../../components/text';
import { Card } from '../../components/card';

export function HungryPage() {
  return (
    <S.Wrapper>
      <Header />
      <S.Image1 src={img1} alt="" />
      <Title size="25rem" uppercase>Fome</Title>
      <Divider height="8rem" />
      <Banner variant>Vamos inovar para lutar contra a fome</Banner>
      <Divider height="20rem" />
      <S.TextWrapper>
        <Text>
          A fome persistente no mundo continua a ser um desafio urgente e complexo que
          afeta milhões de pessoas.Apesar dos avanços tecnológicos e dos esforços internacionais
          para erradicar a fome, muitas regiões ainda enfrentam altos índices de desnutrição e
          insegurança alimentar. É essencial combater esse problema global de forma eficaz e
          promover a igualdade no acesso a alimentos nutritivos e suficientes.
        </Text>
      </S.TextWrapper>
      <Divider height="8rem" />
      <Title size="10.5rem">
        Junte-se a nós
        <br />
        contra a fome.
      </Title>
      <Divider height="8rem" />
      <S.HorizontalSection>
        <Card title="Produção agrícola" description="Para enfrentar a fome de forma sustentável, é fundamental adotar medidas que promovam a produção agrícola, a melhoria do acesso a alimentos e a promoção de sistemas alimentares resilientes." />
        <Card title="Desigualdades" description="É importante abordar as desigualdades sociais, econômicas e de gênero, que contribuem para a persistência da fome. Investimentos em educação, saúde, infraestrutura e proteção social são essenciais para criar condições propícias para o combate à fome." />
      </S.HorizontalSection>
      <Divider height="2rem" />
      <S.HorizontalSection>
        <Text>
          De acordo com a Organização das Nações Unidas para a Alimentação e a Agricultura (FAO),
          aproximadamente 811 milhões de pessoas sofriam de desnutrição crônica entre 2020 e 2022.
          Isso representa cerca de 9,9% da população mundial. Além disso, estima-se que mais de 2
          bilhões de pessoas enfrentem algum grau de insegurança alimentar moderada ou grave. Os
          impactos da fome vão além da saúde individual, afetando o desenvolvimento social e
          econômico das comunidades e países.
          <br />
          <br />
          A fome não é apenas um problema de países em desenvolvimento. Mesmo em nações mais
          desenvolvidas, a insegurança alimentar persiste. Por exemplo, em 2021, mais de 40
          milhões de pessoas nos Estados Unidos viviam em situação de fome ou insegurança alimentar,
          o que representa aproximadamente 12% da população. Esses números destacam a necessidade
          de abordagens abrangentes para garantir que ninguém passe fome, independentemente de sua
          localização geográfica ou nível de desenvolvimento.
        </Text>
        <Text>
          Junte-se a nós contra a fome. É necessário unir esforços globais para erradicar a fome,
          garantir o direito básico à alimentação e construir um mundo mais justo e sustentável.
          Cada ação individual conta e pode fazer a diferença na vida das pessoas que sofrem com a
          falta de alimentos. Vamos trabalhar juntos para criar um futuro onde ninguém mais precise
          enfrentar a dor e a injustiça da fome.
        </Text>
      </S.HorizontalSection>
      <Divider height="8rem" />
      <Footer />
    </S.Wrapper>
  );
}
