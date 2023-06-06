import styled from 'styled-components';
import { Button } from 'antd';
import { Row } from 'react-bootstrap';

export const NewsContainer = styled.div`
  background: white;
  padding-top: 60px;
  padding-bottom: 115px;

  @media (max-width: 768px) {
    padding-top: 36px;
    padding-bottom: 72px;
  }
`;

export const CustomRow = styled(Row)`
  margin-top: 60px !important;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 36px !important;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const ImgNews = styled.img`
  width: 570px;
  height: 325px;

  @media (max-width: 768px) {
    width: 100%;
    height: 188px;
  }
`;

export const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;
  margin: 0;
  color: #3a3a3a;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const ContentLayout = styled.div`
  padding: 3px;

  a {
    color: unset;
    text-decoration: none;
    :hover {
      color: unset;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ContentTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #3a3a3a;
  margin-top: 12px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 36px;
    font-size: 18px;
  }
`;

export const SubContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 21px 0;
  gap: 13px 0;

  @media (max-width: 768px) {
    margin: 16px 0;
  }
`;

export const SubContentRow = styled.div`
  display: flex;
  gap: 0 20px;
  align-items: baseline;
  img {
    width: 6px;
    height: 11px;
  }
`;

export const SubContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #191919;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LinkStyled = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #191919;
  text-decoration: none;

  :hover {
    color: #4ea7f6;
  }
  @media (max-width: 768px) {
    font-size: 16px !important;
  }
`;

export const ButtonMore = styled(Button)`
  margin-top: 8px;
  width: 129px;
  height: 45px;
  color: #e95a24;
  border: 1px solid #e95a24;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  :hover,
  :focus {
    color: #e95a24;
    border: 1px solid #e95a24;
  }
  @media (max-width: 768px) {
    margin-left: 25px;
    width: 97.5px;
    height: 35px;
    font-size: 13px !important;
    margin-top: 0;
  }
`;

export const ArrowButtonMore = styled.img`
  margin-left: 8px;
  margin-bottom: 2px;
  width: 5.56px;
  height: 12.04px;
  @media (max-width: 768px) {
    width: 4.17px;
    height: 9.12px;
  }
`;
