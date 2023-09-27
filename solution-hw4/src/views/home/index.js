// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import './index.css';
import RollCard from './rollcard.js';
import Header from './header.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollcardData: [
        {
          roll_img_src: "assets/products/original-cinnamon-roll.jpg",
          roll_figcaption: "Original cinnamon roll",
          roll_price: "2.49",
          roll_img_alt: "Picture of original cinnamon roll"
        },
        {
          roll_img_src: "assets/products/apple-cinnamon-roll.jpg",
          roll_figcaption: "Apple cinnamon roll",
          roll_price: "3.49",
          roll_img_alt: "Picture of apple cinnamon roll"
        },
        {
          roll_img_src: "assets/products/raisin-cinnamon-roll.jpg",
          roll_figcaption: "Raisin cinnamon roll",
          roll_price: "2.99",
          roll_img_alt: "Picture of raisin cinnamon roll"
        },
        {
          roll_img_src: "assets/products/walnut-cinnamon-roll.jpg",
          roll_figcaption: "Walnut cinnamon roll",
          roll_price: "3.49",
          roll_img_alt: "Picture of walnut cinnamon roll"
        },
        {
          roll_img_src: "assets/products/double-chocolate-cinnamon-roll.jpg",
          roll_figcaption: "Double-chocolate cinnamon roll",
          roll_price: "3.99",
          roll_img_alt: "Picture of double chocolate cinnamon roll"
        },
        {
          roll_img_src: "assets/products/strawberry-cinnamon-roll.jpg",
          roll_figcaption: "Strawberry cinnamon roll",
          roll_price: "3.99",
          roll_img_alt: "Picture of strawberry cinnamon roll"
        }
      ],
    }
  }
  
  render() {
    return (

      <div className = "HomePage">

        <div id = "container">

          <div className = "header_holder">
            <Header/>
          </div>

          <div className = "section" id = "products_page">
            <div id = "rollcard-list"> 
              <RollCard
                cardIndex = {0}
                roll_img_src = {this.state.rollcardData[0].roll_img_src}
                roll_img_alt = {this.state.rollcardData[0].roll_img_alt}
                roll_figcaption = {this.state.rollcardData[0].roll_figcaption}
                roll_price = {this.state.rollcardData[0].roll_price}/>
              <RollCard
                cardIndex = {1}
                roll_img_src = {this.state.rollcardData[1].roll_img_src}
                roll_img_alt = {this.state.rollcardData[1].roll_img_alt}
                roll_figcaption = {this.state.rollcardData[1].roll_figcaption}
                roll_price = {this.state.rollcardData[1].roll_price}/>
              <RollCard
                cardIndex = {2}
                roll_img_src = {this.state.rollcardData[2].roll_img_src}
                roll_img_alt = {this.state.rollcardData[2].roll_img_alt}
                roll_figcaption = {this.state.rollcardData[2].roll_figcaption}
                roll_price = {this.state.rollcardData[2].roll_price}/>
            </div>

            <div id = "rollcard-list"> 
              <RollCard
                  cardIndex = {3}
                  roll_img_src = {this.state.rollcardData[3].roll_img_src}
                  roll_img_alt = {this.state.rollcardData[3].roll_img_alt}
                  roll_figcaption = {this.state.rollcardData[3].roll_figcaption}
                  roll_price = {this.state.rollcardData[3].roll_price}/>
                <RollCard
                  cardIndex = {4}
                  roll_img_src = {this.state.rollcardData[4].roll_img_src}
                  roll_img_alt = {this.state.rollcardData[4].roll_img_alt}
                  roll_figcaption = {this.state.rollcardData[4].roll_figcaption}
                  roll_price = {this.state.rollcardData[4].roll_price}/>
                <RollCard
                  cardIndex = {5}
                  roll_img_src = {this.state.rollcardData[5].roll_img_src}
                  roll_img_alt = {this.state.rollcardData[5].roll_img_alt}
                  roll_figcaption = {this.state.rollcardData[5].roll_figcaption}
                  roll_price = {this.state.rollcardData[5].roll_price}/>
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default HomePage;

