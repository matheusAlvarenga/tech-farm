import styled from 'styled-components';

export const TitleWrapper = styled.div`
  font-family: 'Fjalla One';
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight || 'unset'};
  align-items: flex-end;
  text-align: center;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'unset')};

  background: linear-gradient(272.48deg, #FFFFFF 66.94%, #8336A7 84.96%, #C74FFF 91.51%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  mix-blend-mode: exclusion;

  padding: 0 100px;
`;
