import React, { Component } from "react";

import $ from "jquery";
// IMPORTING CSS
import "./cart.css";
import { Table, Form } from "react-bootstrap";

export default class CartCheckout extends Component {
  state = {
    fadeTime: 300,
  };
  componentDidMount() {}

  render() {
    // const {
    //   image,
    //   title_art,
    //   artist,
    //   description,
    //   quantity,
    //   unit_cost,
    // } = this.cartItems;
    const { cartItems } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="delivery-address">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control type="name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control type="address" className="py-5" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="country" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>State/City</Form.Label>
                  <Form.Control type="state" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="code" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone Numbe</Form.Label>
                  <Form.Control type="phone" />
                </Form.Group>
              </Form>
            </div>
            <div className="payment-method"></div>
          </div>

          <div className="col-12 col-md-5">
            <div className="order-item">
              <div class="row">
                <div className="product-image col">
                  <img src="/assets/img/cart/cart_image.png" />
                </div>
                <div className="products col-8">
                  <h1>story</h1>
                  <h1>story</h1>
                  <h1>story</h1>
                  <h1>story</h1>
                  <h1>story</h1>
                </div>
              </div>
            </div>
            <div className="delivery-information">
              <h1>DELEIVERY INFORMATION</h1>
              <br />
              <span className="delivery-cost">
                <h1> EXPRESS</h1> <h1>cost 7.9</h1>
              </span>
              <h5>esitimated delivery</h5>
              <p className="delivery-date"></p>
              <div className="delivery=partners">
                <h1>OUUR SHIPPING PARTNERS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
