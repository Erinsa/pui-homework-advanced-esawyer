// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import './index.css';
import Roll from './roll.js';
import Header from './header.js';
import CartRoll from './cartroll.js';

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
          // radio1State: "checked", 
          // radio3State: "unchecked", 
          // radio6State: "unchecked",
          // radio12State: "unchecked",
          radioChecked: "radio1",
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
          // radio1State: "checked", 
          // radio3State: "unchecked", 
          // radio6State: "unchecked",
          // radio12State: "unchecked",
          radioChecked: "radio1",
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
          // radio1State: "checked", 
          // radio3State: "unchecked", 
          // radio6State: "unchecked",
          // radio12State: "unchecked",
          radioChecked: "radio1",
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
          // radio1State: "checked", 
          // radio3State: "unchecked", 
          // radio6State: "unchecked",
          // radio12State: "unchecked",
          radioChecked: "radio1",
        },
        {
          roll_img_src: "assets/products/double-chocolate-cinnamon-roll.jpg",
          roll_figcaption: "Double-chocolate cinnamon roll",
          roll_img_alt: "Picture of double chocolate cinnamon roll",
          roll_base_price: "3.99",
          roll_price: "3.99",
          roll_type: "Double-chocolate",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
          // radio1State: "checked", 
          // radio3State: "unchecked", 
          // radio6State: "unchecked",
          // radio12State: "unchecked",
          radioChecked: "radio1",
        },
        {
          roll_img_src: "assets/products/strawberry-cinnamon-roll.jpg",
          roll_figcaption: "Strawberry cinnamon roll",
          roll_img_alt: "Picture of strawberry cinnamon roll",
          roll_base_price: "3.99",
          roll_price: "3.99",
          roll_type: "Strawberry",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
          // radio1State: "checked", 
          // radio3State: "unchecked", 
          // radio6State: "unchecked",
          // radio12State: "unchecked",
          radioChecked: "radio1",
        }
      ],

      cartrollData: [        
      //   {
      //   roll_img_src: "assets/products/original-cinnamon-roll.jpg",
      //   roll_figcaption: "Original cinnamon roll",
      //   roll_img_alt: "Picture of original cinnamon roll",
      //   roll_base_price: "2.49",
      //   roll_price: "2.49",
      //   roll_type: "Original",
      //   roll_glazing: "Keep original",
      //   roll_pack_size: "1",
      // },
      // {
      //   roll_img_src: "assets/products/apple-cinnamon-roll.jpg",
      //   roll_figcaption: "Apple cinnamon roll",
      //   roll_img_alt: "Picture of apple cinnamon roll",
      //   roll_base_price: "3.49",
      //   roll_price: "3.49",
      //   roll_type: "Apple",
      //   roll_glazing: "Keep original",
      //   roll_pack_size: "1",
      // }
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

  // This function helps us calculate the price based on the given formula
  priceCalculator (base_price, glazing, quantity) {
    const glazes = {"Keep original": 0.00, "Sugar milk": 0.00, "Vanilla milk": 0.50, "Double chocolate": 1.50};
    const quantities = {"1": 1, "3": 3, "6": 5, "12": 10};
    let glaze_price_adjust = glazes[glazing];
    let quantity_price_adjust = quantities[quantity];
    let new_price = ((parseFloat(base_price) + parseFloat(glaze_price_adjust)) * parseFloat(quantity_price_adjust)).toFixed(2);
    return new_price;
  }

  // This function helps us handle what needs to happen (price change, etc) when a different glaze is selected 
  glazeChangeSelectorHandler = (event, cardIndex) => {
    let selectValue = event.target.value;
    let newRollData = this.state.rollcardData;
    newRollData[cardIndex].roll_glazing = selectValue;
    let new_price = this.priceCalculator (newRollData[cardIndex].roll_base_price, newRollData[cardIndex].roll_glazing, newRollData[cardIndex].roll_pack_size);
    newRollData[cardIndex].roll_price = new_price;
    this.setState(prevState => ({
      ...prevState,
      rollcardData: newRollData
    }))
  };

  // This function helps us handle what needs to happen (price change, etc) when a different quantity is selected 
  quantityChangeHandler = (event, cardIndex) => {
    let buttonValue = event.target.value;

    let newRollData = this.state.rollcardData;

    let quantities_list = [1, 3, 6, 12];
    for (let quantity of quantities_list){
      let radio_state = "radio" + buttonValue;
      if (quantity == buttonValue){
        newRollData[cardIndex].radioChecked = radio_state;
      }
    }

    newRollData[cardIndex].roll_pack_size = buttonValue;
    let new_price = this.priceCalculator (newRollData[cardIndex].roll_base_price, newRollData[cardIndex].roll_glazing, newRollData[cardIndex].roll_pack_size);
    newRollData[cardIndex].roll_price = new_price;
    this.setState(prevState => ({
      ...prevState,
      rollcardData: newRollData
    }))
  };

  // This function helps us handle what happens when a roll is added to the cart (store roll in cart list, etc)
  addToCartHandler = (cardIndex) => {
    console.log("cartrolldata", this.state.cartrollData.length)
    const newRoll = this.state.rollcardData[cardIndex];

    let newCartRoll = {
      roll_base_price: newRoll.roll_base_price,
      roll_price: newRoll.roll_price,
      roll_type: newRoll.roll_type,
      roll_glazing: newRoll.roll_glazing,
      roll_pack_size: newRoll.roll_pack_size,
    }
    let newCartList = this.state.cart_list
    newCartList.push(newCartRoll)

    let item_count = newCartList.length;
    let itemText = "";
    if (item_count == 1) {
      itemText = " item";
    } else {
      itemText = " items";
    }

    this.setState(prevState => ({
      ...prevState,
      cart_roll_type: newRoll.roll_type,
      cart_roll_glazing: newRoll.roll_glazing,
      cart_roll_pack: newRoll.roll_pack_size,
      cart_roll_price: newRoll.roll_price,
      cart_list: newCartList,
      totalPrice: (parseFloat(this.state.totalPrice) + parseFloat(newRoll.roll_price)).toFixed(2),
      totalItems: item_count,
      totalItemsText: itemText,
    }))
  };

  // This function helps us adjust the visibility of the cart pop up
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
            {/* Used this for help better understanding parent and child components: https://medium.com/@livajorge7/introduction-9e84391f4b83#:~:text=The%20parent%20component%20can%20define%20a%20function%20and%20pass%20it,to%20maintain%2C%20and%20more%20flexible. */}
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

          <div className = "cart_holder" >
          {/* <CartRoll/>
          <CartRoll/>
          <CartRoll/>
          <CartRoll/>
          <CartRoll/>
          <CartRoll/> */}
              {this.state.cartrollData.map((cartroll, idx) => {
                if (this.state.cartrollData.length >= 1){
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
                  roll_price= {this.priceCalculator(cartroll.roll_base_price, cartroll.roll_glazing, cartroll.roll_pack_size)}
                  // roll_price= {this.priceCalculator(rollcard.roll_base_price, rollcard.roll_glazing, rollcard.roll_pack_size)}
                  // onGlazeChange={this.glazeChangeSelectorHandler}
                  // onQuantityChange={this.quantityChangeHandler}
                  // onAddCart={this.addToCartHandler}
                  // onTogglePopUp={this.togglePopUp}
                  />;
              }
              if (this.state.cartrollData.length == 0) {
                return <div>cart is empty</div>;
              }
              }
              )}
          </div>

          {/* <div className = "cart_holder" >
            <div className = "cart_roll_holder">
              <div> 
                  <figure className="cart_roll_figure">
                      <img className = "product_image cart_image" src = "assets/products/original-cinnamon-roll.jpg" width = "200" alt = "Picture of original cinnamon roll" />
                      <figcaption className= "cart_caption">Original cinnamon roll</figcaption>
                  </figure>
              </div>

              <div className = "glazing_cart_text">
                Glazing: Keep Original
              </div>

              <div className = "pack_cart_text">
                Pack Size: 1
              </div>

              <div className = "price_cart_text">
                $ 2.99
              </div>

              <div className = "remove_cart">
                <button className = "remove_button">Remove</button>
              </div>

            </div>

            <div className = "cart_roll_holder">
              <div> 
                  <figure className="cart_roll_figure">
                      <img className = "product_image cart_image" src = "assets/products/original-cinnamon-roll.jpg" width = "200" alt = "Picture of original cinnamon roll" />
                      <figcaption className= "cart_caption">Original cinnamon roll</figcaption>
                  </figure>
              </div>

              <div className = "glazing_cart_text">
                Glazing: Keep Original
              </div>

              <div className = "pack_cart_text">
                Pack Size: 1
              </div>

              <div className = "price_cart_text">
                2.99
              </div>

              <div className = "remove_cart">
                <button className = "remove_button">Remove</button>
              </div>

            </div>

            <div className = "cart_roll_holder">
              <div> 
                  <figure className="cart_roll_figure">
                      <img className = "product_image cart_image" src = "assets/products/original-cinnamon-roll.jpg" width = "200" alt = "Picture of original cinnamon roll" />
                      <figcaption className= "cart_caption">Original cinnamon roll</figcaption>
                  </figure>
              </div>

              <div className = "glazing_cart_text">
                Glazing: Keep Original
              </div>

              <div className = "pack_cart_text">
                Pack Size: 1
              </div>

              <div className = "price_cart_text">
                2.99
              </div>

              <div className = "remove_cart">
                <button className = "remove_button">Remove</button>
              </div>

            </div>

            <div className = "cart_roll_holder">
              <div> 
                  <figure className="cart_roll_figure">
                      <img className = "product_image cart_image" src = "assets/products/original-cinnamon-roll.jpg" width = "200" alt = "Picture of original cinnamon roll" />
                      <figcaption className= "cart_caption">Original cinnamon roll</figcaption>
                  </figure>
              </div>

              <div className = "glazing_cart_text">
                Glazing: Keep Original
              </div>

              <div className = "pack_cart_text">
                Pack Size: 1
              </div>

              <div className = "price_cart_text">
                2.99
              </div>

              <div className = "remove_cart">
                <button className = "remove_button">Remove</button>
              </div>

            </div>

            <div className = "cart_roll_holder">
              <div> 
                  <figure className="cart_roll_figure">
                      <img className = "product_image cart_image" src = "assets/products/original-cinnamon-roll.jpg" width = "200" alt = "Picture of original cinnamon roll" />
                      <figcaption className= "cart_caption">Original cinnamon roll</figcaption>
                  </figure>
              </div>

              <div className = "glazing_cart_text">
                Glazing: Keep Original
              </div>

              <div className = "pack_cart_text">
                Pack Size: 1
              </div>

              <div className = "price_cart_text">
                2.99
              </div>

              <div className = "remove_cart">
                <button className = "remove_button">Remove</button>
              </div>

            </div>




          </div> */}

          {/* roll_img_src: "assets/products/original-cinnamon-roll.jpg",
          roll_figcaption: "Original cinnamon roll",
          roll_img_alt: "Picture of original cinnamon roll",
          roll_base_price: "2.49",
          roll_price: "2.49",
          roll_type: "Original",
          roll_glazing: "Keep original",
          roll_pack_size: "1", */}

          <div className = "search_filter_container">
            <label className = "search_bar">
              <input className = "text_bar" name="myInput" />
              {/* Used these sources for help with the search bar:
              https://www.w3schools.com/howto/howto_css_searchbar.asp
              https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_searchbar2 */}
              <button type="submit">Search</button>
            </label>
            <div className = "filter_option">
                {/* Used the following sources for help calling functions with parameters in the jsx: 
                https://stackoverflow.com/questions/42597602/react-onclick-pass-event-with-parameter
                https://legacy.reactjs.org/docs/faq-functions.html */}
                <span className = "filter_text">sort by:</span>
                <select className = "filter_select">
                    <option value="Name">Name</option>
                    <option value="Base Price">Base Price</option>
                </select>
            </div>
          </div>

          <div className = "section" id = "products_page">

          {/* <div className = "search_filter_container">
            <label className = "search_bar">
              Text input: <input name="myInput" />
            </label>
          </div> */}

            <div id = "rollcard-list"> 
              {this.state.rollcardData.map((rollcard, idx) => {
                return <Roll
                  key={idx}
                  cardIndex={idx}
                  roll_img_src={rollcard.roll_img_src}
                  roll_img_alt={rollcard.roll_img_alt}
                  roll_figcaption={rollcard.roll_figcaption}
                  roll_base_price={rollcard.roll_base_price}
                  roll_type={rollcard.roll_type}
                  roll_glazing={rollcard.roll_glazing}
                  roll_pack_size={rollcard.roll_pack_size}
                  // radio1State = {rollcard.radio1State}
                  // radio3State = {rollcard.radio3State}
                  // radio6State = {rollcard.radio6State}
                  // radio12State = {rollcard.radio12State}
                  radioChecked = {rollcard.radioChecked}
                  roll_price= {this.priceCalculator(rollcard.roll_base_price, rollcard.roll_glazing, rollcard.roll_pack_size)}
                  onGlazeChange={this.glazeChangeSelectorHandler}
                  onQuantityChange={this.quantityChangeHandler}
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

