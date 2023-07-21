import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import CategoriesProduct from "../components/UI/CategoriesProduct";
import Services from "../services/Services.jsx";
import topCategories from "../assets/data/categoriesData";
import { motion } from "framer-motion";
import "../styles/home.css";
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title="home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Tending Products in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  nobis ipsa iste vel, eaque quia incidunt optio magni
                  cupiditate maxime, minus nihil! Fuga iste aperiam nostrum, ea
                  illo cupiditate impedit.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                  <Link to="/products">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      {topCategories?.map((category) => (
        <section key={category} className="trending__products">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">
                  Category -
                  {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                </h2>
              </Col>

              <CategoriesProduct category={category} />
            </Row>
          </Container>
        </section>
      ))}
    </Helmet>
  );
};

export default Home;
