import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import GuideLogin from './GuideHtml/guideLogin';
import GuideChangePassword from './GuideHtml/changePassword';
import GuideCreateOnline from './GuideHtml/guideCreateOnline';
import GuideImportFile from './GuideHtml/guideImportFile';
import GuideECt5 from './GuideHtml/guideECt5';

import { StyledContainer } from '../../global-styles';
import { StyledTitle } from './styles';

function DetailGuide({ idGuide }) {
  const history = useHistory();
  let pageGuide = '';
  switch (idGuide) {
    case 'ld1':
      pageGuide = <GuideLogin />;
      break;
    case 'ld2':
      pageGuide = <GuideCreateOnline />;
      break;
    case 'ld3':
      pageGuide = <GuideImportFile />;
      break;
    case 'ld4':
      pageGuide = <GuideChangePassword />;
      break;
    case 'ld5':
      pageGuide = <GuideECt5 />;
      break;
    default:
      history.push('/huong-dan');
  }
  return (
    <StyledContainer>
      <StyledTitle>Hướng dẫn</StyledTitle>
      {pageGuide}
    </StyledContainer>
  );
}

DetailGuide.propTypes = {
  idGuide: PropTypes.string,
};
export default DetailGuide;
