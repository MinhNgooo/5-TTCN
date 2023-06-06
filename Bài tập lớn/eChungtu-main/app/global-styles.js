import styled, { createGlobalStyle } from 'styled-components';

import { Container, Row } from 'react-bootstrap';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Open Sans' !important;
  }

  body.fontLoaded {
    font-family: 'Open Sans' !important;
  }

  #app {
    background-color: #FFFFFF;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export const StyledContainer = styled(Container)`
  max-width: 1170px !important;
  padding-right: 0 !important;
  padding-left: 0 !important;

  @media (max-width: 768px) {
    padding-right: 16px !important;
    padding-left: 16px !important;
`;

export const StyledRow = styled(Row)`
  max-width: 1170px !important;
`;

export const WebLayout = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) {
    display: unset;
  }
`;

export const MobileLayout = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export default GlobalStyle;
