import React, { useEffect, useState, useRef } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Container, Modal, Row, ModalBody } from "reactstrap";
import logo from "../../assets/react.svg";
import { useSelector } from "react-redux";
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
  const menuRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const { totalQuantity } = useSelector((state) => state.cart);
  console.log(totalQuantity);
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
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);
  const toggleSideModal = () => {
    setIsSideModalOpen(!isSideModalOpen);
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
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
                <span className="badged">{totalQuantity}</span>
              </span>
            </div>
            <div className="mobile__menu">
              <span onClick={toggleSideModal}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>

          {/* <Modal
            isOpen={isSideModalOpen}
            toggle={toggleSideModal}
            className="backdrop-modal"
            contentClassName="side-modal-content"
          /> */}
          <Modal
            isOpen={isSideModalOpen}
            toggle={toggleSideModal}
            className="backdrop-modal"
            contentClassName="side-modal-content"
          >
            <ModalBody>
              <ul className="side-nav-menu">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                      onClick={toggleSideModal}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </ModalBody>
          </Modal>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
