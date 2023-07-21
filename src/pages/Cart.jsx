import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import { removeItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
const Cart = () => {
  const dispatch = useDispatch();
  const { totalAmount, cartItems } = useSelector((state) => state.cart);
  const removeProductFromCart = (id) => {
    dispatch(removeItem(id));
    toast.success("Product removed from cart successfully!");
  };
  return (
    <Helmet title="cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2>No items added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img src={item.imgUrl} alt="product" />
                        </td>
                        <td>{item.productName}</td>
                        <td>Rs.{item.price.toFixed(2)}</td>
                        <td>{item.quantity}pc</td>
                        <td>
                          <motion.i
                            onClick={() => removeProductFromCart(item.id)}
                            whileTap={{ scale: 1.2 }}
                            className="ri-delete-bin-line delete__btn"
                          ></motion.i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">
                    Rs.{totalAmount.toFixed(2)}
                  </span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Taxes and shopping will calculate in checkout
              </p>
              <div>
                <button className="shop__btn w-100">Checkout</button>
                <button className="shop__btn w-100">
                  <Link to="/products">Continue to Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
