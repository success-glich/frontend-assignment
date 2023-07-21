import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import topCategories from "../../assets/data/categoriesData";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <FooterHeader />
          <TopCategories />
          <UseFullLink />
          <Contact />
          <FooterCopyright year={year} />
        </Row>
      </Container>
    </footer>
  );
};

const FooterHeader = () => {
  return (
    <Col lg="4">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div>
          <h1 id="footer__logo">OnlineStore</h1>
        </div>
      </div>
      <p className="footer__text mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        vero ipsum nemo distinctio magni modi aspernatur totam vel quaerat
        tenetur.
      </p>
    </Col>
  );
};
const TopCategories = () => {
  return (
    <Col lg="3">
      <div className="footer__quick-links">
        <h4 className="quick-links-title">Top Categories</h4>
        <ListGroup className="mb-3">
          {topCategories.map((category, index) => (
            <ListGroupItem key={index} className="ps-0 border-0">
              <Link to="#"> {category}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </Col>
  );
};
const UseFullLink = () => {
  return (
    <Col lg="2">
      <div className="footer__quick-links">
        <h4 className="quick-links-title">UseFull Link</h4>
        <ListGroup className="mb-3">
          <ListGroupItem className="ps-0 border-0">
            <Link to="/products"> Products</Link>
          </ListGroupItem>
          <ListGroupItem className="ps-0 border-0">
            <Link to="/cart">Cart</Link>
          </ListGroupItem>

          <ListGroupItem className="ps-0 border-0">
            <Link to="#"> Privacy Policy</Link>
          </ListGroupItem>
        </ListGroup>
      </div>
    </Col>
  );
};
const Contact = () => {
  return (
    <Col lg="3">
      <div className="footer__quick-links">
        <h4 className="quick-links-title"> Contact</h4>
        <ListGroup className="mb-3">
          <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
            <span>
              <i className="ri-map-pin-line " style={{ color: "white" }}></i>
              <p>123, MangalBazar, Lalitpur, Nepal</p>
            </span>
          </ListGroupItem>
          <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
            <span>
              <i className="ri-phone-line"></i>
              <p>+977-9808862324</p>
            </span>
          </ListGroupItem>
          <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
            <span>
              <i className="ri-mail-line"></i>
              <p>iamsaphal21@gmail.com</p>
            </span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </Col>
  );
};
const FooterCopyright = ({ year }) => {
  return (
    <Col lg="12">
      <p className="footer__copyright">
        Copyright {year} developed by Saphal Ghorasaini. All rights reserved
      </p>
    </Col>
  );
};

export default Footer;
