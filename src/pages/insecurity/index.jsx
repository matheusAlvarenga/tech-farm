import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/hungry-1.png';
import * as S from './styles';
import { Banner } from '../../components/banner';
import { Divider } from '../../components/divider';
import { Text } from '../../components/text';
import { Card } from '../../components/card';

export function InsecurityPage() {
  return (
    <S.Wrapper>
      <Header />
      <S.Image1 src={img1} alt="" />
      <Title size="22rem" uppercase>insegurança alimentar</Title>
      <Divider height="8rem" />
      <Banner variant>
        Inovação contra a fome: Apoie iniciativas
        tecnológicas para combater a insegurança alimentar.
      </Banner>
      <Divider height="20rem" />
      <S.TextWrapper>
        <Text>
          A insegurança alimentar é um desafio global que afeta milhões de pessoas, resultando na
          falta de acesso a alimentos nutritivos e suficientes. Essa situação gera impactos
          significativosna saúde, no bem-estar e no desenvolvimento das comunidades. É fundamental
          abordar essa questão de forma abrangente e encontrar soluções inovadoras para garantir
          a segurança alimentar para todos.
        </Text>
      </S.TextWrapper>
      <Divider height="8rem" />
      <Title size="10.5rem">
        Unidos contra a
        <br />
        insegurança alimentar.
      </Title>
      <Divider height="8rem" />
      <S.HorizontalSection>
        <Card title="Tecnologia" description="A tecnologia desempenha um papel fundamental no fortalecimento dos sistemas alimentares, desde a melhoria da produção e armazenamento de alimentos até a distribuição eficiente e o rastreamento de suprimentos.." />
      </S.HorizontalSection>
      <Divider height="2rem" />
      <S.HorizontalSection>
        <Text>
          Segundo a Organização das Nações Unidas para a Alimentação e a Agricultura (FAO),
          aproximadamente 2 bilhões de pessoas enfrentam algum grau de insegurança alimentar
          moderada ou grave em todo o mundo. Isso representa quase um quarto da população global.
          Regiões como a África Subsaariana e partes da Ásia são particularmente afetadas,
          com altos índices de desnutrição e fome.
          <br />
          <br />
          A insegurança alimentar não se limita apenas a países em desenvolvimento. Mesmo em
          nações mais desenvolvidas, como os Estados Unidos, existem problemas significativos
          de insegurança alimentar. Segundo dados recentes, mais de 45 milhões de pessoas nos
          EUA enfrentaram insegurança alimentar em algum momento de 2021, o que corresponde a
          cerca de 13,8% da população. Esses números destacam a necessidade de ações abrangentes
          para garantir que todas as pessoas tenham acesso adequado a alimentos nutritivos.
        </Text>
        <Text>
          Unidos contra a insegurança alimentar. Juntos, podemos combater a falta de acesso a
          alimentos e criar soluções inovadoras para garantir a segurança alimentar. Cada ação
          individual, seja por meio de doações, apoio a tecnologias ou advocacy, contribui para
          melhorar a vida das pessoas que sofrem com a insegurança alimentar. Vamos trabalhar em
          conjunto para construir um mundo onde todos tenham acesso adequado a alimentos
          nutritivos e suficientes.
        </Text>
      </S.HorizontalSection>
      <Divider height="8rem" />
      <Footer />
    </S.Wrapper>
  );
}
