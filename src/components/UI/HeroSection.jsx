import { motion } from "framer-motion";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
const HeroSection = ({ year, imageUrl }) => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">Tending Products in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                nobis ipsa iste vel, eaque quia incidunt optio magni cupiditate
                maxime, minus nihil! Fuga iste aperiam nostrum, ea illo
                cupiditate impedit.
              </p>
              <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                <Link to="/products">SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>

          <Col
            lg="6"
            md="6"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="hero__img">
              <img src={imageUrl} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroSection;
