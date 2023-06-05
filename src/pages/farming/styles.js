import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image1 = styled.img`
  width: 100%;
  max-height: 60rem;
  object-fit: cover;
  padding: 8rem;
  position: absolute;
  top: 17rem;
`;

export const TextWrapper = styled.div`
  max-width: 60rem;

  & > * {
    text-align: center;
  }
`;

export const HorizontalSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  padding: 6rem 12rem;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
