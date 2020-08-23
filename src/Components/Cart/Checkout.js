import { Checkout2 } from "./Checkout2";
import React, { Component } from "react";

// import $ from "jquery";
// IMPORTING CSS
import "./cart.css";
import { Table, Form } from "react-bootstrap";

export default class Checkout extends Component {
  state = {
    fadeTime: 300,
  };
  componentDidMount() {}

  render() {
    return (
      <div className="main">
        <div className="px-2 px-lg-4 py-4 mb-3">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="delivery-address p-4 mb-4">
                <h3 className="checkout-card-title">DELIVERY ADDRESS</h3>
                <hr className="checkout-br" />
                <Form>
                  <Form.Group>
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control type="name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type="address" as="textarea" rows="3" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="country" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>State/City</Form.Label>
                    <Form.Control type="state" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="code" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" />
                  </Form.Group>
                </Form>
              </div>
              <div className="payment-method p-4 mb-4">
                <h3 className="checkout-card-title">PAYMENT METHOD</h3>
                <hr className="checkout-br" />
                <p>Complete your payment through the following means:</p>

                <div className="pay-card">
                  <label className="form-check-label radio">
                    Pay by Card
                    <input
                      type="radio"
                      id="pay-card"
                      name="payment-method"
                      checked="checked"
                      value="card"
                    />
                    <span className="checkround"></span>
                  </label>

                  <div className="card-cont mt-2">
                    <p class="m-0">Card payments are supported by all banks</p>
                    <span>
                      <img
                        src="/images/mastercard.svg"
                        className="card-type"
                      ></img>
                      <img src="/images/visa.svg" className="card-type"></img>
                      <img src="/images/paypal.svg" className="card-type"></img>
                    </span>
                  </div>
                </div>

                <label className="form-check-label radio">
                  Pay on Delivery
                  <input
                    type="radio"
                    id="pay-delivery"
                    name="payment-method"
                    value="delivery"
                  />
                  <span className="checkround"></span>
                </label>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div className="order-item p-4 mb-4">
                <div className="row">
                  <div className="product-image col-4">
                    <img src="/assets/img/cart/cart_image.png" />
                  </div>
                  <div className="products col">
                    {/* <div className="product-title">THE STORY OF THE EYES</div> */}
                    <div className="product-details my-auto">
                      <div className="product-title mb-4">
                        THE STORY OF THE EYES
                      </div>
                      <p className="artist-name">by Jackson Pallock</p>
                      <p className="product-description">
                        Glossed art print, 70 × 45 cm
                      </p>
                    </div>
                    <div className="totals">
                      <div className="fee d-flex flex-row justify-content-between">
                        <span className="text">Subtotal</span>
                        <span className="total">150</span>
                      </div>
                      <div className="fee d-flex flex-row justify-content-between mt-3">
                        <span className="text">Delivery Fee</span>
                        <span className="total">2.89</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="total-fee d-flex flex-row justify-content-end mt-3">
                  <span className="text">ORDER TOTAL</span>
                  <span className="total pl-4">152.89</span>
                </div>
              </div>
              <div className="delivery-information p-4 mb-4">
                <h3 className="checkout-card-title">DELIVERY INFORMATION</h3>
                <hr className="checkout-br" />
                <span className="delivery-cost">
                  <span className="checkout-card-title">EXPRESS: </span>
                  <span className="checkout-card-title">2.89</span>
                </span>
                <p>Expected delivery</p>
                <p>Monday, 24th Feb. 2020</p>
                <p className="delivery-date"></p>
                <div className="delivery-partners p-3">
                  <h5 className="checkout-card-title">OUR SHIPPING PARTNERS</h5>
                  <div className="partners">
                    <img src="/images/ups.svg" className=""></img>
                    <img src="/images/dhl.svg" className="px-2"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="/">
            <button className="checkout ml-sm-2">CONFIRM ORDER</button>
          </a>
        </div>
        <Checkout2 />
      </div>
    );
  }
}
