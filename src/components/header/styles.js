import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 3.2rem;
`;

export const Logo = styled.img`
  height: 4rem;
`;

export const Menu = styled.nav`
  display: flex;
`;

export const MenuItem = styled(Link)`
  padding: 0.8rem 2.4rem;
`;

export const MenuItemText = styled.p`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.4rem;
  color: black;
`;
