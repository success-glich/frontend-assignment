import React, { useEffect, useRef } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/react.svg";
const navLinks = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "products",
    display: "Products",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
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
                <h1>OnlineStore</h1>
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badged">2</span>
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
