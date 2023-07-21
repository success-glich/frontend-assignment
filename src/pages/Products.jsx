import React, { useEffect, useRef, useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import ProductCard from "../components/UI/ProductCard";
import "../styles/products.css";
import { useProducts } from "../hooks/useProducts";
const Products = () => {
  const { data, isLoading, error, isError } = useProducts();
  const inputRef = useRef();
  const [products, setProducts] = useState([]);
  if (isLoading) {
    console.log("loading...");
  }
  const handleSubmit = () => {
    console.log(inputRef.current.value);
    const searchQuery = inputRef.current.value.toLowerCase().trim();
    const filteredData = products.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
    setProducts(filteredData);
  };
  const handleReset = () => {
    setProducts(data);
  };
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <Helmet title={"products"}>
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="search__section d-flex align-items-center ">
                <div className="search__box">
                  <input type="text" placeholder="Search...." ref={inputRef} />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
                <button
                  className="shop__btn search__btn"
                  onClick={handleSubmit}
                >
                  Search
                </button>
                <button className="shop__btn search__btn" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {products &&
              products.length > 0 &&
              products.map((item) => <ProductCard item={item} key={item.id} />)}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Products;
