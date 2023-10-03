// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};    
  }

  render() {
    let popupClass = 'cart_pop_up';
      if (this.props.popUpVisible) {
        popupClass += ' cart_pop_up_visibility_visible';
      }

    return (

      <div className = "header">

        <div className = "logo">
          <img src = "assets/logo/logo-01.svg" width = "400" alt = "Bun Bun bakeshop logo" />
        </div>

        <div className = "header-right">

          <div className = "header-nav">

            <div className = "product">
              <a href = "#products_page" className = "product_link">PRODUCTS</a>
            </div>

            <div className = "cart-box">
              <a href = "" className = "cart_link">CART</a>
              <div className = "cart-contents">

                <div className = {popupClass} id = "cartpopUp">
                  <div className = "cart-pop_up-added">
                    Added to cart:
                  </div>
                  <div className = "cart-pop_up-type">{`${this.props.cart_roll_type}` + " cinnamon roll"}</div>
                  <div className = "cart-pop_up-glaze">{`${this.props.cart_roll_glazing}` + " glazing"}</div>
                  <div className = "cart-pop_up-pack">{"Pack of " + `${this.props.cart_roll_pack}`}</div>
                  <div className = "cart-pop_up-price">{"Price " + `${this.props.cart_roll_price}`}</div>
                </div>

                <div className = "cart-items-text">
                    {`${this.props.totalItems}`+ `${this.props.totalItemsText}`}
                </div>

                <div className = "cart-total-text">
                  {"Total: "+ `${this.props.totalPrice}`}
                </div>

              </div>
            </div>

          </div>

          <hr className = "horizontal_line" />

          <div className = "slogan_box">
            <div className = "slogan">
              Our hand-made cinnamon rolls
            </div>
          </div>

        </div>
        
      </div>

    );
  }
}

export default Header;