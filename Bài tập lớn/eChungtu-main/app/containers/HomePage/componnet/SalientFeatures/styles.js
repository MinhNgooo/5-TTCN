import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const TextHeader = styled.div`
  font-size: ${props => props.theme.fontSizesWeb.banner} !important;
  font-weight: ${props => props.theme.fontWeightWeb.header} !important;
  text-align: center;
  margin-top: 59px;
  margin-bottom: 50px;
  color: #3a3a3a;
  line-height: 130%;

  @media (max-width: 768px) {
    font-size: 20px !important;
    line-height: 26px;
    margin: 36px 0;
    padding: 0 60px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const RowCustom = styled(Row)`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 36px 0;
    margin-bottom: 36px;
  }
`;

export const LoadingLazyStyled = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`;

export const ListFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 69px;
  animation-duration: 2s;
  animation-name: cusFadeInUp;

  @media (max-width: 768px) {
    margin-bottom: 0;
    align-items: baseline;
    gap: 0 20px;
  }

  .leftBox-col1 {
    position: relative;
    right: 8px;

    @media (max-width: 768px) {
      position: unset;
      right: 0;
    }
  }

  .rightBox-col1 {
    position: relative;
    left: 6px;

    @media (max-width: 768px) {
      position: unset;
      right: 0;
    }
  }

  .leftBox-col2 {
    position: relative;
    right: 5px;

    @media (max-width: 768px) {
      position: unset;
      right: 0;
    }
  }

  .rightBox-col2 {
    position: relative;
    left: 7.5px;

    @media (max-width: 768px) {
      position: unset;
      right: 0;
    }
  }
`;

export const BoxFeature = styled.div`
  width: 50%;
  text-align: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const IconFeature = styled.div`
  img {
    width: 150px;
    height: 151px;
  }
  @media (max-width: 768px) {
    width: 110px;
    height: 110px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const TextFeature = styled.div`
  font-weight: ${props => props.theme.fontWeightWeb.textFeature} !important;
  font-size: ${props => props.theme.fontSizesWeb.content} !important;
  line-height: 30px;
  margin-top: 11px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px !important;
    margin-top: 11px;
  }
`;
