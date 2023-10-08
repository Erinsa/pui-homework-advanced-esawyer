// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from "react";
import './cart.css';

class CartRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };   
  }

  render() {

    return (
        // <div className = "cart_holder" >
            <div className = "cart_roll_holder">
              <div> 
                  <figure className="cart_roll_figure">
                      <img className = "product_image cart_image" src = {this.props.roll_img_src} width = "200" alt = {this.props.roll_img_alt} />
                      <figcaption className= "cart_caption">{this.props.roll_figcaption}</figcaption>
                  </figure>
              </div>

              <div className = "glazing_cart_text">
                {`Glazing: ${this.props.roll_glazing}`}
              </div>

              <div className = "pack_cart_text">
                {`Pack Size: ${this.props.roll_pack_size}`}
              </div>

              <div className = "price_cart_text">
                {`$ ${this.props.roll_price}`}
              </div>

              <div className = "remove_cart">
                <button className = "remove_button" onClick={() => this.props.onRemove(this.props.rollIndex)}>Remove</button>
              </div>

            </div>
        //   </div>

    );
  }
}

export default CartRoll;