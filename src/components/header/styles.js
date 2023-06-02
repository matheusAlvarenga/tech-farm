import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 32px;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Menu = styled.nav`
  display: flex;
`;

export const MenuItem = styled(Link)`
  padding: 8px 24px;
`;

export const MenuItemText = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: black;
`;
