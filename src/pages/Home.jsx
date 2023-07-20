import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Services from "../services/Services.jsx";
import ProductCard from "../components/UI/ProductCard";
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
                <button className="shop__btn">
                  <Link to="/products">SHOP NOW</Link>
                </button>
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
      {/* services */}
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Row>
        </Container>
      </section>
      <section className="trending__products mb-2">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-2">
              <h2 className="section__title">Trending Products</h2>
            </Col>

            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
