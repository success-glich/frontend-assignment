import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import logoImg from "../assets/react.svg";
import { Container, Row, Col } from "reactstrap";
const ProductDetails = () => {
  return (
    <Helmet title="Camera">
      <CommonSection title={"PRODUCTS"} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={logoImg} alt="products" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>Camera</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <span>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-half-s-line"></i>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
