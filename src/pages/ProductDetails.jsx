import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import logoImg from "../assets/react.svg";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import ProductCard from "../components/UI/ProductCard";
import "../styles/product-details.css";
import { useParams } from "react-router-dom";
import { userProductById } from "../hooks/useProducts";
import StarRating from "../components/UI/StarRating";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error, isError } = userProductById(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const addToCart = () => {
    dispatch(
      addItem({
        id: data.id,
        image: data.image,
        productName: data.title,
        price: data.price,
      })
    );
    toast.success("Product added to cart successfully");
  };
  return (
    <Helmet title={data.title.slice(0, 7) + "..."}>
      <CommonSection title={data.category} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" className="text-center">
              <img
                src={data.image}
                alt="products"
                style={{ marginTop: "2rem", height: "20rem", width: "20rem" }}
              />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{data.title}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <StarRating averageRating={data.rating.rate} />
                  <p>
                    ( <span>{data.rating.count}</span> ratings)
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-5">
                <span className="product__price">Rs{200}</span>
                <span>Category: {data.category}</span>
              </div>
              <p className="my-3">{data.description.slice(0, 40) + "..."}</p>

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="shop__btn"
                onClick={addToCart}
              >
                Add to cart
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col lg="12" className="mb-2">
            <div className="tab__wrapper d-flex align-items-start gap-2">
              <h6>Description</h6>
              <div className="tab__content ">
                <p>{data.description}</p>
              </div>
            </div>
          </Col>
          {/* <Col lg="12" className="mt-5">
            <h2 className="related__title">You might also like</h2>
            <ProductCard />
          </Col> */}
        </Row>
      </Container>
    </Helmet>
  );
};

export default ProductDetails;
