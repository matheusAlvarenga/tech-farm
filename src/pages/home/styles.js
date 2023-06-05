import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image1 = styled.img`
  position: absolute;
  top: 43.2rem;
  left: 20%;
  width: 57rem;
  height: 400px;
  object-fit: cover;
`;

export const Image2 = styled.img`
  padding: 8rem 4.8rem;
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const Image3 = styled.img`
  position: absolute;
  top: 15rem;
  right: 0;
  width: 56rem;
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4.8rem;
  padding: 6rem 12rem;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Image4 = styled.img`
  position: absolute;
  left: 0;
  width: 48rem;
`;

export const Image5 = styled.img`
  position: absolute;
  right: 0;
  width: 52rem;

  @media (max-width: 1460px) {
    width: 45rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 60rem;

  & > * {
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  text-decoration: underline;
  color: #90A0AF;
`;
