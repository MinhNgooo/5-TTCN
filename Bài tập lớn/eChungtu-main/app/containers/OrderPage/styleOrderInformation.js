import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const HeaderInfo = styled.strong`
  color: #08b7dd;
  font-family: Open Sans;
  font-size: 21px;
  line-height: 60px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: unset;
    line-height: 32px;
  }
`;

export const RowInfo = styled.div`
  font-size: 18px;
  line-height: 44px;
  color: #3a3a3a;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-left: unset;
    line-height: 30px;
  }
`;
export const ContentInfo = styled.span`
  font-family: ${props => props.theme.fontFamily.openSans};
  padding-left: 5px;
`;

export const TextContact = styled.div`
  color: #ff3600;
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
  margin: 20px 0;
`;

export const ContentSupport = styled.div`
  padding-top: 10px;
  span {
    color: #ff0000;
  }
`;

export const ContactRow = styled.div`
  padding-top: 30px;
`;

export const SpanPhone = styled(ContentInfo)`
  color: #212529 !important;
`;

export const StyledCol = styled(Col)`
  margin-bottom: unset;
`;

export const StyledTitle = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  margin-left: -2px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: unset;
    margin-top: 36px;
    margin-bottom: 33px;
    line-height: 34px;
  }
`;
