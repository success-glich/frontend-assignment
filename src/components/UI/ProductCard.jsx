import React from "react";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item?.image} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">{item?.title}</h3>
          <span> {item?.category}</span>
        </div>
        <div className="product__card-button">
          <span className="price">Rs. {item?.price}</span>
          <span>
            <i className="ri-add-line"></i>{" "}
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
