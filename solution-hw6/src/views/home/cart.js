// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from "react";
import CartRoll from './cartroll.js';
// import './cartroll.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cartrollData: JSON.parse(localStorage.getItem("cartrollData")) || [],
    };   
  }

  componentDidMount() {
    console.log("hello", this.state.cartrollData);
    localStorage.setItem("cartrollData", JSON.stringify(this.state.cartrollData));
  }

  componentDidUpdate() {
    localStorage.setItem("cartrollData", JSON.stringify(this.state.cartrollData));
    // console.log("cart", this.state.cartrollData)
    // if 
    console.log("cart new", JSON.parse(localStorage.getItem("cartrollData")))
  }

  render() {

    return (

        <div className = "cartcard-list"> 

        {this.props.cartrollData.map((cartroll, idx) => {
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
            onRemove = {this.props.onRemove}
            />;
        })}
      </div>

    );
  }
}

export default Cart;