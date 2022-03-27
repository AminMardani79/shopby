import React, { createRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Styles
import style from "../../assets/css/Navbar.module.css";
// Styled Components
import {
  CartIcon,
  Header,
  RightNav,
  Nav,
  HamburgerItems,
  HamburgerMenu,
  Hamburger,
  Overlay,
  ActiveSpan,
} from "./NavbarElements";
// image
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStyles, setActiveStyles] = useState({
    width: "36px",
    left: "0",
  });
  const OpenMenu = () => {
    setIsOpen(true);
  };
  const CloseMenu = () => {
    setIsOpen(false);
  };
  const clickHandler = (e) => {
    setActiveStyles((prevState) => ({
      ...prevState,
      left: `${e.target.offsetLeft}px`,
      width: `${e.target.offsetWidth}px`,
    }));
  };
  return (
    <Header>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <Nav className={style.navbarMenu}>
        <NavLink
          to="/home"
          className={(navData) => (navData.isActive ? style.active : "")}
          onClick={clickHandler}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={(navData) => (navData.isActive ? style.active : "")}
          onClick={clickHandler}
        >
          Products
        </NavLink>
        <ActiveSpan styles={activeStyles}></ActiveSpan>
      </Nav>
      <RightNav className={style.rightNav}>
        <div className={style.shoppingCart}>
          <Link to="/">
            <CartIcon />
            <span>1</span>
          </Link>
        </div>
        <div className={style.enterAccount}>
          <Link className={style.login} to="/login">
            LOG IN
          </Link>
          <Link className={style.signUp} to="/signup">
            SIGN UP
          </Link>
        </div>
      </RightNav>
      <HamburgerItems>
        <Hamburger onClick={OpenMenu} />
        <HamburgerMenu isOpen={isOpen}>
          <div className="hamburgerlogo-container">
            <img className="hamburgerLogo" src={logo} alt="logo" />
          </div>
          <div className="hamburger-links">
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </div>
        </HamburgerMenu>
        <Overlay onClick={CloseMenu} isFade={isOpen}></Overlay>
      </HamburgerItems>
    </Header>
  );
};

export default Navbar;
