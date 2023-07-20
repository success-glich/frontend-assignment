import React from "react";
import logo from "../../assets/images/hero-img.png";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
const ProductCard = () => {
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <img src={logo} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">Bag</h3>
          <span> Electronics</span>
        </div>
        <div className="product__card-button">
          <span className="price">Rs. 200</span>
          <span>
            <i className="ri-add-line"></i>{" "}
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
