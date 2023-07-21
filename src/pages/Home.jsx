import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import CategoriesProduct from "../components/UI/CategoriesProduct";
import Services from "../services/Services.jsx";
import topCategories from "../assets/data/categoriesData";
import HeroSection from "../components/UI/HeroSection";
import "../styles/home.css";
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title="home">
      <HeroSection year={year} imageUrl={heroImg} />
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
