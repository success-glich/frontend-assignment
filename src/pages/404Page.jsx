import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

const PageNotFound = ({ title = "Page not found" }) => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-2">
          <h1>Oops!</h1>
          <h2>404 - {title}</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <button className="shop__btn mb-5 ">Go to Home</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
