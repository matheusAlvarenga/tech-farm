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
`;

export const Image4 = styled.img`
  position: absolute;
  left: 0;
`;

export const Image5 = styled.img`
  position: absolute;
  right: 0;
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

export const Logo = styled.img``;
