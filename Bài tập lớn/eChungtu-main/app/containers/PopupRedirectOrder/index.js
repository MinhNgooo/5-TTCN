import React from 'react';
import imgRedirectOrderPage from '../../images/imgRedirectOrderPage.png';
import { ContainerRegister } from './styles';
export function PopupRedirectOrder() {
  return (
    <ContainerRegister>
      <a href="/dat-mua?s=951111">
        <img alt="" src={imgRedirectOrderPage} />
      </a>
    </ContainerRegister>
  );
}
