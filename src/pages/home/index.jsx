import { Header } from '../../components/header';
import { Title } from '../../components/title';
import img1 from '../../assets/home-1.png';
import * as S from './styles';

export function Home() {
  return (
    <div>
      <Header />
      <S.FirstImage
        src={img1}
        alt=""
      />
      <Title>
        estamos
        <br />
        mudando o mundo
      </Title>

    </div>
  );
}
