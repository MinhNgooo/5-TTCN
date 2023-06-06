import React, { useState } from 'react';
import brand from 'images/brand.svg';
import iconLogin from 'images/icon-login.svg';
import iconLoginMobile from 'images/icon-login-mobile.svg';
import btnContact from 'images/btn-contact.svg';
import iconClose from 'images/icon-close.svg';
import iconToggle from '../../../images/icon-toggle.svg';

import {
  BtnContact,
  CustomHr,
  NavLinkLogin,
  StyledIconLogin,
  StyledNavbar,
  StyledNavLeft,
  StyledNavLink,
  StyledNavRight,
  StyledOffcanvas,
  StyledOffcanvasBody,
} from './styles';
import { StyledContainer } from '../../../global-styles';

function Header() {
  const expand = 'md';
  const [closeMenu, setCloseMenu] = useState(true);
  const closeToggle = () => {
    setCloseMenu(!closeMenu);
  };
  const currentURL = window.location.pathname;
  return (
    <StyledNavbar key={expand} expand={expand} className="navbar-fixed-top">
      <StyledContainer>
        <StyledNavbar.Toggle
          className="toggle-mobile"
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={closeToggle}
        >
          <img hidden={!closeMenu} alt="" src={iconToggle} />
          <img hidden={closeMenu} alt="" src={iconClose} />
        </StyledNavbar.Toggle>
        <StyledNavbar.Brand href="/" style={{ paddingTop: '2px' }}>
          <img className="brand-logo" alt="" src={brand} />
        </StyledNavbar.Brand>
        <StyledNavbar.Brand
          href="https://van.echungtu.vn/"
          style={{ paddingTop: '2px' }}
          className="brand-login-mobile"
        >
          <img className="icon-login-mobile" alt="" src={iconLoginMobile} />
        </StyledNavbar.Brand>
        <StyledOffcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <StyledOffcanvasBody>
            <StyledNavLeft className="justify-content-start flex-grow-1 pe-0">
              {/* <StyledNavLink href="/">Giới thiệu</StyledNavLink> */}
              {/* <CustomHr /> */}
              <StyledNavLink className="order" href="/dat-mua">
                Đặt mua
              </StyledNavLink>
              <CustomHr />
              <StyledNavLink href="/bang-gia">
                <span
                  className={currentURL.includes('/bang-gia') ? 'isActive' : ''}
                >
                  {' '}
                  Bảng giá{' '}
                </span>
              </StyledNavLink>
              <CustomHr />

              <StyledNavLink href="/tin-tuc">
                <span
                  className={currentURL.includes('/tin-tuc') ? 'isActive' : ''}
                >
                  Tin tức
                </span>
              </StyledNavLink>
              <CustomHr />

              <StyledNavLink href="/huong-dan">
                <span
                  className={
                    currentURL.includes('/huong-dan') ? 'isActive' : ''
                  }
                >
                  {' '}
                  Hướng dẫn{' '}
                </span>
              </StyledNavLink>
              <CustomHr />
            </StyledNavLeft>
            <StyledNavRight className="justify-content-end flex-grow-1 pe-0">
              <NavLinkLogin href="https://van.echungtu.vn/">
                <StyledIconLogin alt="" src={iconLogin} />
                <span className="text-login">
                  Đăng nhập
                  <CustomHr />
                </span>
              </NavLinkLogin>
              <StyledNavLink href="/lien-he" className="style-button-contact">
                <BtnContact
                  className="btn-contact-for-desk"
                  alt=""
                  src={btnContact}
                />
                <span className="text-contact"> Liên hệ</span>
              </StyledNavLink>
            </StyledNavRight>
          </StyledOffcanvasBody>
        </StyledOffcanvas>
      </StyledContainer>
    </StyledNavbar>
  );
}

export default Header;
