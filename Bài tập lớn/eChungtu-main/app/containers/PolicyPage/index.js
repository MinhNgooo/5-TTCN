import React from 'react';
import { StyledContainer } from '../../global-styles';
import { BodyStyled } from './styled';
import { htmlPage } from './content';

const PolicyPage = () => (
  <StyledContainer>
    <BodyStyled>
      <div dangerouslySetInnerHTML={{ __html: htmlPage }} />
    </BodyStyled>
  </StyledContainer>
);

export default PolicyPage;
