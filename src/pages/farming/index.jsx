import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/hungry-1.png';
import * as S from './styles';
import { Banner } from '../../components/banner';
import { Divider } from '../../components/divider';
import { Text } from '../../components/text';
import { Card } from '../../components/card';

export function FarmingPage() {
  return (
    <S.Wrapper>
      <Header />
      <S.Image1 src={img1} alt="" />
      <Title size="25rem" uppercase>Agricultura</Title>
      <Divider height="80px" />
      <Banner variant>Cultive um futuro mais verde.</Banner>
      <Divider height="20rem" />
      <S.TextWrapper>
        <Text>
          A agricultura sustentável desempenha um papel fundamental na garantia da segurança
          alimentar global,ao mesmo tempo em que protege os recursos naturais e o meio ambiente.
          Essa abordagem busca promover práticas agrícolas que sejam ecologicamente equilibradas,
          socialmente justas e economicamente viáveis. Ao adotarmos a agricultura sustentável,
          podemos cultivar alimentos saudáveis, preservar a biodiversidade e construir um futuro
          mais resiliente.
        </Text>
      </S.TextWrapper>
      <Divider height="80px" />
      <Title size="10.5rem">
        Alimente a transformação.
        <br />
        Promova a sustentabilidade.
      </Title>
      <Divider height="80px" />
      <S.HorizontalSection>
        <Card title="Agricultura sustentável" description="A agricultura sustentável é uma necessidade urgente para enfrentar os desafios globais de segurança alimentar. Segundo a Organização das Nações Unidas para Alimentação e Agricultura (FAO), aproximadamente 690 milhões de pessoas sofrem de fome crônica no mundo." />
        <Card title="Metas da ODS 2" description="O Objetivo de Desenvolvimento Sustentável 2 (ODS 2) da ONU visa alcançar a fome zero e promover a agricultura sustentável. Essas metas ambiciosas buscam garantir o acesso universal a alimentos nutritivos e suficientes, além de promover práticas agrícolas que sejam ambientalmente conscientes e socialmente justas." />
      </S.HorizontalSection>
      <Divider height="20px" />
      <S.HorizontalSection>
        <Text>
          Ao adotarmos práticas agrícolas sustentáveis, podemos aumentar a produção de alimentos de
          forma eficiente, preservando a qualidade do solo, conservando a água e minimizando o uso
          de agroquímicos. Além disso, a agricultura sustentável promove a diversificação de
          cultivos, a proteção da biodiversidade e a geração de renda para pequenos agricultores.
          <br />
          <br />
          A fome persistente é uma realidade que afeta milhões de pessoas em todo o mundo. Segundo
          a FAO, aproximadamente 690 milhões de pessoas passam fome crônica, o que representa
          cerca de 8,9% da população global. Além disso, estima-se que mais de 2 bilhões de
          pessoas enfrentem algum grau de insegurança alimentar. Para alcançar a meta de fome
          zero do ODS 2, é necessário implementar práticas agrícolas sustentáveis que aumentem
          a produtividade, melhorem o acesso aos alimentos e promovam a resiliência dos sistemas
          alimentares.
        </Text>
        <Text>
          Investir na agricultura sustentável não apenas beneficia a produção de alimentos, mas
          também impulsiona o desenvolvimento rural e promove a equidade social. Ao apoiar pequenos
          agricultores, especialmente mulheres e jovens, e garantir seu acesso a recursos,
          tecnologias e mercados, podemos fortalecer a segurança alimentar local, reduzir a pobreza
          e melhorar as condições de vida nas comunidades rurais. A agricultura sustentável é uma
          abordagem holística que visa equilibrar as necessidades das pessoas, do planeta e da
          prosperidade econômica, promovendo um futuro mais verde e sustentável para todos.
        </Text>
      </S.HorizontalSection>
      <Divider height="80px" />
      <Footer />
    </S.Wrapper>
  );
}
