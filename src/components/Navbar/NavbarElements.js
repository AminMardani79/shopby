import styled from "styled-components";

// Icons
import { MdShoppingCart, MdReorder } from "react-icons/md";

export const CartIcon = styled(MdShoppingCart)`
  color: #292a2f;
  font-size: 25px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 40px;
  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const RightNav = styled.div`
  display: flex;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerItems = styled.nav`
  @media screen and (min-width: 768.001px) {
    display: none;
  }
`;
export const HamburgerMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #c3c3c3;
  box-shadow: 0 0 20px #ababab;
  transition: all 0.3s ease-in;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  z-index: 10;
  .hamburgerlogo-container {
    text-align: center;
    margin-bottom: 25px;
    margin-top: 10px;
  }
  .hamburgerLogo {
    width: 60%;
  }
  .hamburger-links {
    display: flex;
    flex-direction: column;
    text-align: center;
    a {
      font-size: 15px;
      color: #5e5e5e;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .active {
      color: #3b71ff;
    }
  }
`;
export const Hamburger = styled(MdReorder)`
  font-size: 20px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  z-index: 9;
  background-color: #000;
  opacity: ${(props) => (props.isFade ? "0.3" : "0")};
  visibility: ${(props) => (props.isFade ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
`;
