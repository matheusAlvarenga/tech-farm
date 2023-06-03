import * as S from './styles';

export function Title({ children, size, uppercase }) {
  return (
    <S.TitleWrapper size={size} uppercase={uppercase}>
      {children}
    </S.TitleWrapper>
  );
}
