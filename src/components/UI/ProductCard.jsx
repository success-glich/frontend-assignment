import React from "react";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../../redux/slices/cartSlice";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addItem({
        id: item.id,
        imgUrl: item.image,
        productName: item.title,
        price: item.price,
      })
    );
    toast.success("Product added to cart successfully");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <Link to={`/products/${item.id}`}>
            <motion.img whileHover={{ scale: 0.9 }} src={item?.image} alt="" />
          </Link>
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            {" "}
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </h3>
          <span> {item?.category}</span>
        </div>
        <div className="product__card-button">
          <span className="price">Rs. {item?.price}</span>
          <span onClick={addToCart} style={{ cursor: "pointer" }}>
            <i className="ri-add-line c"></i>{" "}
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
