import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/hungry-1.png';
import * as S from './styles';
import { Banner } from '../../components/banner';
import { Divider } from '../../components/divider';
import { Text } from '../../components/text';

export function HungryPage() {
  return (
    <S.Wrapper>
      <Header />
      <S.Image1 src={img1} alt="" />
      <Title size="25rem" uppercase>Fome</Title>
      <Divider height="80px" />
      <Banner variant>The Radicle community exists in various places. Join us!</Banner>
      <Divider height="32rem" />
      <S.TextWrapper>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae ex diam.
          Quisque et ipsum eros. Nunc aliquam elit non felis bibendum, cursus feugiat erat suscipit.
          Donec porttitor nunc dignissim eros egestas aliquam in eu erat. Praesent odio elit, auctor
          id justo non, condimentum finibus nisi.
        </Text>
      </S.TextWrapper>
      <Divider height="80px" />
      <Title size="10.5rem">
        Utilizando a Tecnologia para
        <br />
        melhorar a agricultura
      </Title>
      <Divider height="80px" />
      <S.HorizontalSection>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae ex diam.
          Quisque et ipsum eros. Nunc aliquam elit non felis bibendum, cursus feugiat erat suscipit.
          Donec porttitor nunc dignissim eros egestas aliquam in eu erat. Praesent odio elit, auctor
          id justo non, condimentum finibus nisi.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae ex diam.
          Quisque et ipsum eros. Nunc aliquam elit non felis bibendum, cursus feugiat erat suscipit.
          Donec porttitor nunc dignissim eros egestas aliquam in eu erat. Praesent odio elit, auctor
          id justo non, condimentum finibus nisi.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae ex diam.
          Quisque et ipsum eros. Nunc aliquam elit non felis bibendum, cursus feugiat erat suscipit.
          Donec porttitor nunc dignissim eros egestas aliquam in eu erat. Praesent odio elit, auctor
          id justo non, condimentum finibus nisi.
        </Text>
      </S.HorizontalSection>
      <Divider height="80px" />
      <Footer />
    </S.Wrapper>
  );
}
