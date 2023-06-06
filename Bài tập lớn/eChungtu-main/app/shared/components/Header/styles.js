import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

const pathName = window.location.pathname;
export const StyledNavbar = styled(Navbar)`
  background-color: ${props =>
    pathName === '/'
      ? props.theme.background.banner
      : props.theme.background.header};
  height: 60px;
  position: fixed;
  /* width: 100% !important; */
  top: 0;
  z-index: 10000;

  .navbar-toggler {
    border: none;
  }

  .navbar-toggler:focus {
    box-shadow: none !important;
  }

  .brand-logo-mobile {
    display: none;
  }

  .order {
    display: none;
  }

  .brand-login-mobile {
    display: none;
  }

  .icon-login-mobile {
    visibility: hidden;
  }

  @media only screen and (max-width: 768px) {
    height: 46px !important;
    padding: 5px 0px !important;
    .brand-logo {
      width: 176.49px !important;
      height: 19px;
      object-fit: cover;
      margin-top: 4px;
    }

    .toggle-mobile {
      margin-left: -12px;
    }

    .brand-login-mobile {
      display: block;
    }
    .icon-login-mobile {
      visibility: visible;
      margin-right: -12px;
    }
  }
`;

export const StyledNavLeft = styled(Nav)`
  position: relative;
  right: 15px;
  @media screen and (max-width: 768px) {
    position: relative;
    right: 0;
  }
`;

export const StyledNavRight = styled(Nav)`
  padding-right: 2px !important;
  .text-contact {
    display: none;
  }
  @media (max-width: 768px) {
    .text-login {
      display: none;
    }
    .text-contact {
      display: inline;
    }
  }
`;

export const StyledOffcanvas = styled(StyledNavbar.Offcanvas)`
  background-color: ${props => props.theme.background.header} !important;
  top: 45px !important;
  left: 0;
  width: 100% !important;
  overflow-x: hidden !important;
  transition: 0.5s !important;
  color: ${props => props.theme.colors.header} !important;

  @media screen and (max-width: 768px) {
    background-color: #f4f4f4 !important;
    border-right: 0 !important;
  }
`;

export const StyledOffcanvasHeader = styled(Offcanvas.Header)`
  padding-bottom: 0px !important;
  padding-right: 25px !important;
`;

export const StyledOffcanvasBody = styled(Offcanvas.Body)`
  padding-top: 0 !important;
  .isActive {
    border-bottom: solid #ffffff 2px;
    padding-bottom: 3px;
  }
  @media (max-width: 768px) {
    padding-top: 14px !important;
  }
`;

export const StyledNavLink = styled(Nav.Link)`
  color: ${props => props.theme.colors.header} !important;
  font-size: ${props => props.theme.fontSizesWeb.header} !important;
  font-weight: ${props => props.theme.fontWeightWeb.header} !important;
  line-height: 35px;

  @media only screen and (min-width: 768px) {
    padding-left: 33px !important;
    padding-right: 0px !important;
    font-size: ${props => props.theme.fontSizesMobile.header} !important;
  }

  @media only screen and (max-width: 768px) {
    font-weight: 400 !important;
    padding-bottom: 0px !important;
    color: #007cba !important;
    font-size: 16px !important;
    line-height: 15px;

    .nav-link-for-desk {
      display: none !important;
    }
    .nav-link-for-mobile {
      display: inline !important;
    }
  }
`;
export const StyledIconLogin = styled.img`
  padding-right: 7px;
  padding-bottom: 3px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkLogin = styled(StyledNavLink)`
  position: relative;
`;

export const BtnContact = styled.img`
  padding-bottom: 1px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CustomHr = styled.hr`
  display: none;
  @media (max-width: 768px) {
    display: inline;
    color: #c7c7c7;
    opacity: 60% !important;
    position: relative;
    top: 6px;
  }
`;
