import * as S from './styles';

export function Card({ title, description }) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.Wrapper>
  );
}
