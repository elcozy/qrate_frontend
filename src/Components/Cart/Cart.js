import React, { Component } from "react";

// import $ from "jquery";
// IMPORTING CSS
import "./cart.css";
import { Table, Form } from "react-bootstrap";
import { data } from "./data";
import { NavLink } from "react-router-dom";
import { Content } from "../GeneralComp/Content";
export default class Cart extends Component {
  productTable = React.createRef();
  productPrice = React.createRef();
  state = {
    fadeTime: 300,
    total: "",
    subtotal: "",
    cartItems: [],
  };
  componentDidMount() {
    this.allData();
    this.selectElement();
  }

  allData = () => {
    this.setState({
      cartItems: data.map((c) => ({
        ...c,
        unit_total: c.unit_cost * c.quantity,
      })),
    });
    // console.log(this.state.cartItems);
  };

  /* Update quantity */
  updateQuantity(qty, id) {
    const cart = this.state.cartItems.map((c) => {
      if (c.id === id) {
        c.quantity = +qty;
        c.unit_total = c.unit_cost * qty;
      }
      return c;
    });
    this.setState({ cartItems: cart });
  }

  selectElement(quantity, valueToSelect) {
    // var valueToSelect = 3;
    let element = document.getElementsByName(quantity);
    element.value = valueToSelect;
    // console.log(element);
  }
  //      Remove item from cart
  removeItem(id) {
    var cart = this.state.cartItems.filter((c) => c.id !== id);
    // var cartTotal = cart.slice(0, e).concat(cart.slice(1 + e, cart.length + 1));
    this.setState({ cartItems: cart });
    // console.log(cart);
  }

  render() {
    const { cartItems } = this.state;
    const total = cartItems.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.unit_total,
      0
    );
    // console.log(cartItems);

    return (
      <Content className="hi cart-all container-fluid bg-grey">
        <div className="">
          <h1 className="cart-title m-0">Cart</h1>
          <div className="cart-item"></div>

          <div className="shopping-cart">
            <Table responsive>
              <thead>
                <tr>
                  <th colSpan="2" className="product-imagei text-left">
                    ITEM
                  </th>
                  <th className="product-quantityi">QUANTITY</th>
                  <th className="product-pricei">UNIT PRICE</th>
                  <th className="product-line-pricei">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody className="product">
                {cartItems.map((item, i) => (
                  <tr key={i} ref={this.productTable} className={i}>
                    {/* <td>{item.artist}</td> */}

                    <td className="w-1">
                      <div className="product-image">
                        <img alt="" src={item.image} />
                      </div>
                    </td>

                    <td>
                      <div className="product-details h-100 my-auto ml-3">
                        <div className="product-title mb-4">
                          {item.title_art}
                        </div>
                        <p className="artist-name">by {item.artist}</p>
                        <p className="product-description">
                          {item.description}
                        </p>
                        <div className="product-removal mt-4">
                          <div
                            className={`remove-product p${i}`}
                            onClick={() => this.removeItem(item.id)}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="my-auto">
                      <div className="product-quantity col h-100 my-auto">
                        <div className="dropdown">
                          <Form.Group className="m-0">
                            <Form.Control
                              as="select"
                              name="quantity"
                              value={item.quantity}
                              onChange={(e) =>
                                this.updateQuantity(e.target.value, item.id)
                              }
                              className="border-0 mx-auto"
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </Form.Control>
                          </Form.Group>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        className="text-center product-price col h-100 my-auto"
                        ref={this.productPrice}
                        name="product-price"
                      >
                        {item.unit_cost}
                      </div>
                    </td>
                    <td>
                      <div className="text-center product-line-price col h-100 my-auto">
                        {item.unit_total}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="totals">
              <div className="totals-item text-right">
                <label className="my-auto mr-3">TOTAL:</label>
                <span className="totals-value" id="cart-total">
                  {total}
                </span>
              </div>
            </div>
            <div className="row justify-content-center justify-content-sm-end">
              <a href="/explore">
                <button className="explore mr-sm-2">CONTINUE EXPLORING</button>
              </a>
              <NavLink to="/checkout">
                <button className="checkout ml-sm-2">
                  PROCEED TO CHECKOUT
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}
