import * as S from './styles';

export function Title({
  children, size, uppercase, align = 'center',
}) {
  return (
    <S.TitleWrapper size={size} uppercase={uppercase} align={align}>
      {children}
    </S.TitleWrapper>
  );
}
