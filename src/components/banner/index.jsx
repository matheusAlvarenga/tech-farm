import * as S from './styles';

export function Banner({ children }) {
  return (
    <S.Wrapper>
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
}
