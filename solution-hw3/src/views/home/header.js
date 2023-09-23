// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};    
  }

  render() {
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
            <div className = "cart">
              <a href = "" className = "cart_link">CART</a>
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