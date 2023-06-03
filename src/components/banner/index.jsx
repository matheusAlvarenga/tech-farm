import * as S from './styles';

export function Banner({ children, variant }) {
  return (
    <S.Wrapper variant={variant}>
      <S.Text variant={variant}>{children}</S.Text>
    </S.Wrapper>
  );
}
