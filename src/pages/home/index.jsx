import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/home-1.png';
import img2 from '../../assets/home-2.png';
import img3 from '../../assets/home-3.png';
import img4 from '../../assets/home-4.png';
import img5 from '../../assets/home-5.png';
import logo from '../../assets/logo.svg';
import * as S from './styles';
import { Banner } from '../../components/banner';
import { Divider } from '../../components/divider';
import { Text } from '../../components/text';

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
        <Divider height="32px" />
        <Banner variant>
          Utilizamos IA generativas para aumentar a produtividade de nossas fazendas
        </Banner>
      </S.Section>
      <Divider height="160px" />
      <S.Section>
        <S.Image4 src={img4} alt="" />
        <Divider height="40px" />
        <Title size="20rem" uppercase lineHeight="100%">Revolucao da agricultura</Title>
      </S.Section>
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
      <S.Section>
        <S.Image5 src={img5} alt="" />
        <Title size="20rem" uppercase>
          Entenda mais
          <br />
          sobre
        </Title>
        <S.TextWrapper>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae ex diam.
            Quisque et ipsum eros. Nunc aliquam elit non felis bibendum.
            <br />
            <S.StyledLink to="#">Veja nosso video pitch!</S.StyledLink>
          </Text>
        </S.TextWrapper>
      </S.Section>
      <Divider height="80px" />
      <S.Section>
        <S.Logo src={logo} alt="" />
        <Divider height="40px" />
      </S.Section>
    </S.Wrapper>
  );
}
