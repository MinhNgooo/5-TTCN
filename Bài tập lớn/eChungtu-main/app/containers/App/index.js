/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import HomePage from 'containers/HomePage/Loadable';
import ErrorPage from 'shared/components/ErrorPage';
import Footer from 'shared/components/Footer';
import Header from 'shared/components/Header';
import NewsPage from '../NewsPage';
import DetailPage from '../DetailPage';
import OrderPage from '../OrderPage';
import ContactPage from '../ContactPage';
import PricePage from '../PricePage';

import GlobalStyle from '../../global-styles';
import { normalTheme } from '../../themes/normalTheme';
// eslint-disable-next-line no-unused-vars
// import { darkTheme } from '../../themes/darkTheme';

import fakeApiDetail from '../../mookData/mookApiDetal';
import GuidePage from '../GuidePage';
import PolicyPage from '../PolicyPage';
import OrderInformation from '../OrderPage/OrderInformation';
import DetailGuide from '../GuidePage/detailGuide';
import mockDataGuideDetail from './mockDataGuideDetail.json';
import { PopupRedirectOrder } from '../PopupRedirectOrder';
// eslint-disable-next-line arrow-body-style
const ComponentRouter = ({ component: Component }) => {
  const { Content } = Layout;
  return (
    <Route
      render={() => (
        <Layout style={{ height: '100%', backgroundColor: '#FFFFFF' }}>
          <Header />
          <Content>
            <Component />
          </Content>
          <Footer />
        </Layout>
      )}
    />
  );
};

ComponentRouter.propTypes = {
  component: PropTypes.func,
};

export default function App() {
  return (
    <ThemeProvider theme={normalTheme}>
      <>
        <Switch>
          <Route exact path="/popup-dat-mua" component={PopupRedirectOrder} />
          <ComponentRouter exact path="/" component={HomePage} />
          <ComponentRouter exact path="/tin-tuc" component={NewsPage} />
          {fakeApiDetail.map(item => (
            <ComponentRouter
              exact
              path={`/tin-tuc/${item.id}`}
              component={() => (
                <DetailPage
                  id={item.id}
                  title={item.title}
                  createdAt={item.createdAt}
                  content={item.content}
                  source={item.source}
                  allNews={fakeApiDetail}
                />
              )}
              key={item.id}
            />
          ))}
          <ComponentRouter exact path="/lien-he" component={ContactPage} />
          <ComponentRouter exact path="/dat-mua" component={OrderPage} />
          <ComponentRouter exact path="/bang-gia" component={PricePage} />
          <ComponentRouter exact path="/huong-dan" component={GuidePage} />
          {mockDataGuideDetail.map(item => (
            <ComponentRouter
              exact
              path={item.pathname}
              component={() => <DetailGuide idGuide={item.id} />}
            />
          ))}
          <ComponentRouter
            exact
            path="/thong-tin-dat-mua"
            component={OrderInformation}
          />
          <ComponentRouter
            exact
            path="/dieu-khoan-su-dung"
            component={PolicyPage}
          />
          <Route path="" render={() => <ErrorPage code="404" />} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
