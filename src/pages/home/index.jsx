import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/home-1.png';
import img2 from '../../assets/home-2.png';
import * as S from './styles';
import { Banner } from '../../components/banner';
import { Divider } from '../../components/divider';

export function Home() {
  return (
    <S.Wrapper>
      <Header />
      <S.Image1
        src={img1}
        alt=""
      />
      <Title>
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
    </S.Wrapper>
  );
}
