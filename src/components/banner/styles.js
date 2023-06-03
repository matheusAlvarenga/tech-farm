import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.6rem 2.4rem;
  background: black;
  border-radius: 16px;

  position: relative;
  z-index: 2;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: white;

  & > b {
    color: white;
  }
`;
