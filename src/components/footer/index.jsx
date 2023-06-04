import { Divider } from '../divider';
import logo from '../../assets/logo.svg';
import * as S from './styles';

export function Footer() {
  return (
    <S.Section>
      <S.Logo src={logo} alt="" />
      <Divider height="40px" />
    </S.Section>
  );
}
