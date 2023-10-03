// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import './index.css';
import Roll from './roll.js';
import Header from './header.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollcardData: [
        {
          roll_img_src: "assets/products/original-cinnamon-roll.jpg",
          roll_figcaption: "Original cinnamon roll",
          roll_img_alt: "Picture of original cinnamon roll",
          roll_base_price: "2.49",
          roll_price: "2.49",
          roll_type: "Original",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
        },
        {
          roll_img_src: "assets/products/apple-cinnamon-roll.jpg",
          roll_figcaption: "Apple cinnamon roll",
          roll_img_alt: "Picture of apple cinnamon roll",
          roll_base_price: "3.49",
          roll_price: "3.49",
          roll_type: "Apple",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
        },
        {
          roll_img_src: "assets/products/raisin-cinnamon-roll.jpg",
          roll_figcaption: "Raisin cinnamon roll",
          roll_img_alt: "Picture of raisin cinnamon roll",
          roll_base_price: "2.99",
          roll_price: "2.99",
          roll_type: "Raisin",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
        },
        {
          roll_img_src: "assets/products/walnut-cinnamon-roll.jpg",
          roll_figcaption: "Walnut cinnamon roll",
          roll_img_alt: "Picture of walnut cinnamon roll",
          roll_base_price: "3.49",
          roll_price: "3.49",
          roll_type: "Walnut",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
        },
        {
          roll_img_src: "assets/products/double-chocolate-cinnamon-roll.jpg",
          roll_figcaption: "Double-chocolate cinnamon roll",
          roll_img_alt: "Picture of double chocolate cinnamon roll",
          roll_base_price: "3.99",
          roll_price: "3.99",
          roll_type: "Double-chocolate",
          roll_glazing: "Keep original",
          roll_pack_size: "1"
        },
        {
          roll_img_src: "assets/products/strawberry-cinnamon-roll.jpg",
          roll_figcaption: "Strawberry cinnamon roll",
          roll_img_alt: "Picture of strawberry cinnamon roll",
          roll_base_price: "3.99",
          roll_price: "3.99",
          roll_type: "Strawberry",
          roll_glazing: "Keep original",
          roll_pack_size: "1"
        }
      ],

      popUpVisible: false,
      totalPrice: "0.00",
      totalItems: 0,
      totalItemsText: " items",
      cart_roll_type: "Original",
      cart_roll_glazing: "Keep original",
      cart_roll_pack: 1,
      cart_roll_price: 2.49,
      cart_list: [],
    };
    this.togglePopUp = this.togglePopUp.bind(this);

  }

  priceCalculator (base_price, glazing, quantity) {
    const glazes = {"Keep original": 0.00, "Sugar milk": 0.00, "Vanilla milk": 0.50, "Double chocolate": 1.50};
    const quantities = {"1": 1, "3": 3, "6": 5, "12": 10};
    console.log("glazing", glazing)
    let glaze_price_adjust = glazes[glazing];
    let quantity_price_adjust = quantities[quantity];
    let new_price = ((parseFloat(base_price) + parseFloat(glaze_price_adjust)) * parseFloat(quantity_price_adjust)).toFixed(2);
    return new_price;
  }

  glazeChangeSelectorHandler = (event, cardIndex) => {
    console.log("backlog2", this.state.cart_list);
    let selectValue = event.target.value;
    let newRollData = this.state.rollcardData;
    console.log("index", cardIndex)
    newRollData[cardIndex].roll_glazing = selectValue;
    let new_price = this.priceCalculator (newRollData[cardIndex].roll_base_price, newRollData[cardIndex].roll_glazing, newRollData[cardIndex].roll_pack_size);
    newRollData[cardIndex].roll_price = new_price;
    this.setState(prevState => ({
      ...prevState,
      rollcardData: newRollData
    }))
  };

  quantityChangeSelectorHandler = (event, cardIndex) => {
    let buttonValue = event.target.value;
    let newRollData = this.state.rollcardData;
    console.log("index", cardIndex)
    newRollData[cardIndex].roll_pack_size = buttonValue;
    let new_price = this.priceCalculator (newRollData[cardIndex].roll_base_price, newRollData[cardIndex].roll_glazing, newRollData[cardIndex].roll_pack_size);
    newRollData[cardIndex].roll_price = new_price;
    this.setState(prevState => ({
      ...prevState,
      rollcardData: newRollData
    }))
  };

  addToCartHandler = (event, cardIndex) => {
    console.log("backlog", this.state.cart_list);
    let newRoll = this.state.rollcardData[cardIndex];
    this.state.cart_list.push(newRoll);
    let item_count = this.state.cart_list.length;
    let itemText = "";

    if (item_count == 1) {
      itemText = " item";
    } else {
      itemText = " items";
    }

    this.setState(prevState => ({
      ...prevState,
      cart_roll_type: this.state.rollcardData[cardIndex].roll_type,
      cart_roll_glazing: this.state.rollcardData[cardIndex].roll_glazing,
      cart_roll_pack: this.state.rollcardData[cardIndex].roll_pack_size,
      cart_roll_price: this.state.rollcardData[cardIndex].roll_price,
      totalPrice: (parseFloat(this.state.totalPrice) + parseFloat(this.state.rollcardData[cardIndex].roll_price)).toFixed(2),
      // totalItems: this.state.totalItems += 1,
      totalItems: item_count,
      totalItemsText: itemText,
      // cart_list: this.state.cart_list.push(newRoll),
    }))
  };

  togglePopUp() {
    this.setState({
      popUpVisible: true
    })
    setTimeout(() => {
      this.setState({
        popUpVisible: false
      })
    }, 3000);
  };

  render() {

    return (

      <div className = "HomePage">

        <div id = "container">

          <div className = "header_holder">
            <Header
            totalItems = {this.state.totalItems}
            totalItemsText = {this.state.totalItemsText}
            totalPrice = {this.state.totalPrice}
            popUpVisible = {this.state.popUpVisible}
            cart_roll_type = {this.state.cart_roll_type}
            cart_roll_glazing = {this.state.cart_roll_glazing}
            cart_roll_pack = {this.state.cart_roll_pack}
            cart_roll_price = {this.state.cart_roll_price}
            onTogglePopUp = {this.togglePopUp}
            />
          </div>

          <div className = "section" id = "products_page">
            <div id = "rollcard-list"> 
              {this.state.rollcardData.map((rollcard, idx) => {
                return <Roll
                  key={idx}
                  cardIndex={idx}
                  roll_img_src={rollcard.roll_img_src}
                  roll_img_alt={rollcard.roll_img_alt}
                  roll_figcaption={rollcard.roll_figcaption}
                  // roll_price={this.state.roll_price}
                  // roll_price= {this.priceCalculator(this, this.roll_base_price, this.roll_glazing, this.roll_pack_size)}
                  // noteCategory={notecard.noteCategory}
                  roll_base_price={rollcard.roll_base_price}
                  roll_type={rollcard.roll_type}
                  roll_glazing={rollcard.roll_glazing}
                  roll_pack_size={rollcard.roll_pack_size}
                  roll_price= {this.priceCalculator(rollcard.roll_base_price, rollcard.roll_glazing, rollcard.roll_pack_size)}
                  onGlazeChange={this.glazeChangeSelectorHandler}
                  onQuantityChange={this.quantityChangeSelectorHandler}
                  onAddCart={this.addToCartHandler}
                  onTogglePopUp={this.togglePopUp}
                  />;
              })}
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default HomePage;

