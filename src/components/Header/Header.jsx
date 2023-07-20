import React, { useEffect, useRef } from "react";
import "./header.css";
import { Container, NavLink, Row } from "reactstrap";
import logo from "../../assets/react.svg";
const Header = () => {
  const headerRef = useRef(null);
  const menuToggle = () => {};
  const navigateToCart = () => {};
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef?.current?.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>OnlineSore</h1>
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <NavLink
                    to="products"
                    // className={(navClass) => {
                    //   return navClass.isActive ? "nav__active" : "";
                    // }}
                    className="nav__active"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="home"
                    // className={(navClass) => {
                    //   return navClass.isActive ? "nav__active" : "";
                    // }}
                    className=""
                  >
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__icons">
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">2</span>
              </span>
            </div>
            <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
