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
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Electrify</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus vero ipsum nemo distinctio magni modi aspernatur
              totam vel quaerat tenetur.
            </p>
          </Col>
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
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick-links-title">UseFull Link</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/products"> Products</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart"> Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick-links-title"> Contact</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i
                      className="ri-map-pin-line "
                      style={{ color: "white" }}
                    ></i>
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
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Success Ghorasaini. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
