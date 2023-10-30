// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from "react";
import './cartroll.css';
import CartRoll from './cartroll.js';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};   
  }

  render() {

    return (

        <div className = "overarching_cart">

          {this.props.cartShowing &&

            <div className = "cart_holder" >

              {(this.props.cartData.length == 0) &&
                <div className = "cart_empty_text">The cart is empty!</div>
              }

              {(this.props.cartData.length >= 1) &&

                <div className = "cart_shown_holder">

                  <div className = "cart_shown_price_items_text_holder">

                    <div className = "cart-items-text-shown">
                      {`Shopping Cart (`+`${this.props.cartData.length}`+ `${this.props.cartData.length == 1 ? " item" : " items"}`+`)`}
                    </div>

                    <div className = "cart-total-text-shown">
                      {"Total: $ "+ `${this.props.cartData.reduce((sum, num) => parseFloat(sum) + parseFloat(num.roll_price), 0).toFixed(2)}`}
                    </div>

                  </div>

                  <div className = "cartcard-list"> 
                    {this.props.cartData.map((cartroll, idx) => {
                      return <CartRoll
                        key={idx}
                        rollIndex={idx}
                        roll_img_src={cartroll.roll_img_src}
                        roll_img_alt={cartroll.roll_img_alt}
                        roll_figcaption={cartroll.roll_figcaption}
                        roll_base_price={cartroll.roll_base_price}
                        roll_type={cartroll.roll_type}
                        roll_glazing={cartroll.roll_glazing}
                        roll_pack_size={cartroll.roll_pack_size}
                        roll_price= {this.props.priceCalculator(cartroll.roll_base_price, cartroll.roll_glazing, cartroll.roll_pack_size)}
                        onRemove = {this.props.removeButtonHandler}
                      />;
                    })}
                  </div>

                </div>
              }

            </div>

          }

        </div>

    );
  }
}

export default Cart;