import React, { Component } from "./node_modules/react";

import $ from "./node_modules/jquery";
// IMPORTING CSS
import "./cart.css";
import { Table, Form } from "./node_modules/react-bootstrap";

export default class CartHome extends Component {
  state = {
    fadeTime: 300,
    total: "",
    subtotal: "",
    cartItems: [],
  };
  componentDidMount() {
    //     /* Set rates + misc */
    //     var taxRate = 0.05;
    //     var shippingRate = 15.0;
    //     var fadeTime = 300;

    //     /* Assign actions */
    //     $(".product-quantity input").change(function () {
    //       updateQuantity(this);
    //     });

    $(".product-removal div").click(function () {
      removeItem(this);
    });

    //     /* Recalculate cart */
    //     function recalculateCart() {
    //       var subtotal = 0;

    //       /* Sum up row totals */
    //       $(".product").each(function () {
    //         subtotal += parseFloat($(this).children(".product-line-price").text());
    //       });

    //       /* Calculate totals */
    //       var tax = subtotal * taxRate;
    //       var shipping = subtotal > 0 ? shippingRate : 0;
    //       var total = subtotal + tax + shipping;

    //       /* Update totals display */
    //       $(".totals-value").fadeOut(fadeTime, function () {
    //         $("#cart-subtotal").html(subtotal.toFixed(2));
    //         $("#cart-tax").html(tax.toFixed(2));
    //         $("#cart-shipping").html(shipping.toFixed(2));
    //         $("#cart-total").html(total.toFixed(2));
    //         if (total == 0) {
    //           $(".checkout").fadeOut(fadeTime);
    //         } else {
    //           $(".checkout").fadeIn(fadeTime);
    //         }
    //         $(".totals-value").fadeIn(fadeTime);
    //       });
    //     }

    //     /* Update quantity */
    //     function updateQuantity(quantityInput) {
    //       /* Calculate line price */
    //       var productRow = $(quantityInput).parent().parent();
    //       var price = parseFloat(productRow.children(".product-price").text());
    //       var quantity = $(quantityInput).val();
    //       var linePrice = price * quantity;

    //       /* Update line price display and recalc cart totals */
    //       productRow.children(".product-line-price").each(function () {
    //         $(this).fadeOut(fadeTime, function () {
    //           $(this).text(linePrice.toFixed(2));
    //           recalculateCart();
    //           $(this).fadeIn(fadeTime);
    //         });
    //       });
    //     }

    //     /* Remove item from cart */
    const removeItem = (e) => {
      var removeButton = e;
      /* Remove row from DOM and recalc cart total */
      var productRow = removeButton.closest(".product");
      productRow.parentNode.removeChild(productRow);
      // console.log(removeButton.parentNode);
    };
    this.allData();
    var productChildren = document.querySelectorAll(".product .product-price")
      .textContent;
    this.recalculateCart();

    console.log(productChildren);
    console.log(this.recalculateCart());
  }

  allData = () => {
    var data = [
      {
        image: "/assets/img/cart/cart_image.png",
        title_art: "THE STORY OF THE EYES",
        artist: "Jackson Pallock",
        description: "Glossed art print, 70 × 45 cm",
        quantity: "1",
        unit_cost: "150",
      },
      {
        image: "/assets/img/cart/cart_image.png",
        title_art: "THE STORY OF THE EYES",
        artist: "Rey Pallock",
        description: "Glossed art print, 70 × 45 cm",
        quantity: "1",
        unit_cost: "350",
      },
      {
        image: "/assets/img/cart/cart_image.png",
        title_art: "THE STORY OF THE EYES",
        artist: "Reyg Pallock",
        description: "Glossed art print, 70 × 45 cm",
        quantity: "1",
        unit_cost: "350",
      },
      {
        image: "/assets/img/cart/cart_image.png",
        title_art: "THE STORY OF THE EYES",
        artist: "Reyg Pallock",
        description: "Glossed art print, 70 × 45 cm",
        quantity: "1",
        unit_cost: "350",
      },
    ];
    // const { image, title_art, artist, description, quantity, unit_cost } = data;
    // console.log(image, data, artist);
    data.map((item, i) => {
      var rey = data.slice(0, 1).concat(data.slice(1 + 1, i + 1));
      console.log(rey);
      console.log("test");
      return <li key={i}>Test</li>;
    });
    this.setState({ cartItems: data });
    console.log(this.state.cartItems);
  };
  /* Assign actions */
  /* Recalculate cart */
  calculateTotal() {
    this.setState({ total: "" });
  }
  calculateSubTotal() {
    this.setState({ subtotal: "" });
  }
  recalculateCart() {
    var subtotal = 0;
    var fadeTime = this.state.fadeTime;

    /* Sum up row totals */
    var product = document.querySelectorAll(".product");
    Array.prototype.forEach.call(product, function () {
      var productChildren = document.querySelectorAll(
        ".product .product-line-price"
      );
      // var productChildren = document.querySelectorAll(".product-line-price");
      console.log(productChildren.innerHTML);
      subtotal += parseFloat(
        $(this).children(".product-line-price").textContent
      );
    });

    /* Calculate totals */
    var total = subtotal;

    /* Update totals display */
    $(".totals-value").fadeOut(fadeTime, function () {
      $("#cart-subtotal").html(subtotal.toFixed(2));
      $("#cart-total").html(total.toFixed(2));
      if (total === 0) {
        $(".checkout").fadeOut(fadeTime);
      } else {
        $(".checkout").fadeIn(fadeTime);
      }
      $(".totals-value").fadeIn(fadeTime);
    });
  }
  removeItem() {
    // console.log(this.state.cartItems);
    var cart = this.state.cartItems;
    var rey = cart.slice(0, 1).concat(cart.slice(1 + 1, 3 + 1));
    console.log(rey);
    // cart.map((item, i) => {
    //   console.log("test");
    // });
  }
  /* Update quantity */
  updateQuantity(quantityInput) {
    var fadeTime = this.state.fadeTime;
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children(".product-price").text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    /* Update line price display and recalc cart totals */
    productRow.children(".product-line-price").each(function () {
      $(this).fadeOut(fadeTime, function () {
        $(this).text(linePrice.toFixed(2));
        this.recalculateCart();
        $(this).fadeIn(fadeTime);
      });
    });
  }
  //     /* Remove item from cart */

  //   removeItem = (e) => {
  //     var removeButton = e;
  //     /* Remove row from DOM and recalc cart total */
  //     // var productRow = removeButton.closest(".product");
  //     // productRow.parentNode.removeChild(productRow);
  //     console.log(removeButton.parentNode);
  //     this.recalculateCart();
  //   };

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
        <div className="px-2">
          <h1 className="cart-title">Cart</h1>
          <div className="cart-item"></div>

          <div className="shopping-cart">
            <Table responsive>
              <thead>
                <tr>
                  <th colSpan="2" className="product-imagei">
                    ITEM
                  </th>
                  <th className="product-quantityi">QUANTITY</th>
                  <th className="product-pricei">UNIT PRICE</th>
                  <th className="product-line-pricei">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody className="product">
                {cartItems.map((item, i) => (
                  <tr key={i}>
                    {/* <td>{item.artist}</td> */}

                    <td>
                      <div className="product-image">
                        <img src={item.image} />
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
                            className="remove-product"
                            onClick={(e) => this.removeItem(e)}
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
                      <div className="text-center product-price col h-100 my-auto">
                        {item.unit_cost}
                      </div>
                    </td>
                    <td>
                      <div className="text-center product-line-price col h-100 my-auto">
                        150
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
                  71.97
                </span>
              </div>
            </div>
            <div className="row justify-content-center justify-content-sm-end">
              <button className="explore mr-sm-2">CONTINUE EXPLORING</button>
              <a href="/cart/checkout">
                <button className="checkout ml-sm-2">
                  PROCEED TO CHECKOUT
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
