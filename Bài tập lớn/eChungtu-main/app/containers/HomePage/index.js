import React from 'react';
import WOW from 'wow.js';
import Banner from './componnet/Banner';
import SalientFeatures from './componnet/SalientFeatures';
import ReasonsForUse from './componnet/ReasonsForUse';
import News from './componnet/News';
import CustomerList from './componnet/CustomerList';
import CustomerReview from './componnet/CustomerReview';
import OutstandingNumbers from './componnet/OutstandingNumbers';
import OtherService from './componnet/OtherSevice';

const HomePage = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-new
    const wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();
  }, []);
  return (
    <div>
      {' '}
      <Banner />
      <SalientFeatures />
      <ReasonsForUse />
      <OtherService />
      <OutstandingNumbers />
      <CustomerReview />
      <CustomerList />
      <News />
    </div>
  );
};

export default HomePage;
