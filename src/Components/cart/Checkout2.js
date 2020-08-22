import React, { Component } from "react";

// IMPORTING CSS
import "./cart.css";
import { Table, Form } from "react-bootstrap";
export function Checkout2() {
  return (
    <div className="mafin">
      <div className="px-2 px-lg-4 py-4 mb-3">
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="delivery-address p-4 mb-4">
              <h3 className="checkout-card-title">CARD DETAILS</h3>
              <hr className="checkout-br" />
              <Form>
                <Form.Group>
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <div className="checkout-line">
                  <span className="d-flex">
                    <Form.Group>
                      <Form.Label>Expiry Date</Form.Label>
                      <span className="d-flex">
                        <Form.Control
                          className="w-50"
                          type="number"
                          min="01"
                          max="12"
                          placeholder="MM"
                        />
                        <Form.Control
                          type="number"
                          min="2020"
                          max="2028"
                          className="w-50 ml-2"
                          placeholder="YYYY"
                        />
                      </span>
                    </Form.Group>
                    <Form.Group className="ml-3">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="password"
                        maxlenght="4"
                        size="4"
                        className="w-50"
                        required
                      />
                    </Form.Group>
                  </span>
                </div>
              </Form>
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
    </div>
  );
}
