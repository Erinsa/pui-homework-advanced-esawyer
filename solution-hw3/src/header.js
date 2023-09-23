import React, { Component } from 'react';
import './index.css';

class HeaderChunk extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };    
//   }

  render() {
    return (
        <div class = "header">

      <div class = "logo">
        <img src= "assets/logo/logo-01.svg" width = "400" alt = "Bun Bun bakeshop logo" />
      </div>

      <div class = "header-right">

          <div class = "header-nav">
            <div class = "product">
            <a href="#products_page" class = "product_link">PRODUCTS</a>
            </div>
            <div class = "cart">
              CART
            </div>
          </div>

          <hr class="horizontal_line" />
          {/* Used this link for help with line styling 
          https://www.w3schools.com/howto/howto_css_style_hr.asp/ */}

          <div class = "slogan_box">
            <div class = "slogan">
              Our hand-made cinnamon rolls
            </div>
          </div>

      </div>

    </div>

    );
  }
}

export default HeaderChunk;