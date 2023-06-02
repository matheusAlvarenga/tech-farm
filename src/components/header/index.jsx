import * as S from './styles';
import mainLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <S.Wrapper>
      <S.Logo src={mainLogo} />
      <S.Menu>
        <S.MenuItem>
          <S.MenuItemText>Inicio</S.MenuItemText>
        </S.MenuItem>
        <S.MenuItem><S.MenuItemText>Fome</S.MenuItemText></S.MenuItem>
        <S.MenuItem><S.MenuItemText>Inseguranca Alimentar</S.MenuItemText></S.MenuItem>
        <S.MenuItem><S.MenuItemText>Agricultura</S.MenuItemText></S.MenuItem>
        <S.MenuItem><S.MenuItemText>Nossa Solucao ↓</S.MenuItemText></S.MenuItem>
      </S.Menu>
    </S.Wrapper>
  );
}
