import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { StyledContainer } from '../../global-styles';
// import likeSVG from '../../images/like-face.svg';
// import shareSVG from '../../images/share-face.svg';

import {
  StyledTitle,
  StyledCreatedTime,
  StyledText,
  StyledImg,
  StyledSource,
  OtherNewsContainer,
  PaginationContainer,
  StyledLink,
  StyledPagination,
  StyledPageItem,
} from './styles';

const DetailPage = ({ title, createdAt, content, source, allNews, id }) => {
  const history = useHistory();
  const otherNews = allNews.filter(news => news.id !== id);
  const handleRedirect = newsId => {
    history.push(`/tin-tuc/${newsId}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: 'app',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v11.0',
      });
    };
    (function(d, s, elementId) {
      let js = d.getElementsByTagName(s)[0];
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(elementId)) {
        return;
      }
      js = d.createElement(s);
      js.id = elementId;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);
  let urlShare = window.location.href;
  if (!urlShare.includes('https://')) {
    urlShare =
      'https://remotesigning.bkavca.vn/tin-tuc/-/view-content/46178/hop-dong-dien-tu-bkav-econtract-duoc-vinh-danh-san-pham-chuyen-doi-so-xuat-sac';
  }
  return (
    <StyledContainer>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledCreatedTime>
          <span className="time">{createdAt.time} / </span>
          <span className="date">{createdAt.date}</span>
        </StyledCreatedTime>
        {content.map(item =>
          typeof item === 'string' ? (
            <StyledText>{item}</StyledText>
          ) : (
            <StyledImg>
              <img src={item.thumbnail} alt="hinh minh hoa" />
              <p className="quote">{item.quote}</p>
            </StyledImg>
          ),
        )}
        <StyledSource>Nguồn: {source}</StyledSource>
        <div style={{ textAlign: 'left' }}>
          <div
            className="fb-like"
            data-href={urlShare}
            data-width=""
            data-layout="button"
            data-action="like"
            data-size="small"
            data-share="false"
          />
          <div
            className="fb-share-button"
            data-href={urlShare}
            data-layout="button_count"
          />
        </div>
        <OtherNewsContainer>
          <p className="sub-title">Tin tức khác</p>
          <Row>
            {otherNews.map(news => (
              <StyledLink
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                onClick={() => handleRedirect(news.id)}
              >
                <ul>
                  <li>
                    <span className="title-other-news">{news.title}</span>
                  </li>
                </ul>
              </StyledLink>
            ))}
          </Row>
        </OtherNewsContainer>
        <PaginationContainer>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <StyledPagination>
                <StyledPageItem>1</StyledPageItem>
              </StyledPagination>
            </Col>
          </Row>
        </PaginationContainer>
      </div>
    </StyledContainer>
  );
};

DetailPage.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.object,
  content: PropTypes.array,
  source: PropTypes.string,
  allNews: PropTypes.array,
  id: PropTypes.number,
};

export default DetailPage;
