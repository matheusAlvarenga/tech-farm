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
  top: 20rem;
`;

export const Image2 = styled.img`
  position: absolute;
  left: 0;
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
  gap: 4.8rem;
  padding: 6rem 12rem;
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
