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
          roll_name: "Original cinnamon roll",
          roll_img_src: "assets/products/original-cinnamon-roll.jpg",
          roll_figcaption: "Original cinnamon roll",
          roll_img_alt: "Picture of original cinnamon roll",
          roll_base_price: "2.49",
          roll_price: "2.49",
          roll_type: "Original",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
          radioChecked: "radio1",
        },
        {
          roll_name: "Apple cinnamon roll",
          roll_img_src: "assets/products/apple-cinnamon-roll.jpg",
          roll_figcaption: "Apple cinnamon roll",
          roll_img_alt: "Picture of apple cinnamon roll",
          roll_base_price: "3.49",
          roll_price: "3.49",
          roll_type: "Apple",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
          radioChecked: "radio1",
        },
        {
          roll_name: "Raisin cinnamon roll",
          roll_img_src: "assets/products/raisin-cinnamon-roll.jpg",
          roll_figcaption: "Raisin cinnamon roll",
          roll_img_alt: "Picture of raisin cinnamon roll",
          roll_base_price: "2.99",
          roll_price: "2.99",
          roll_type: "Raisin",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
          radioChecked: "radio1",
        },
        {
          roll_name: "Walnut cinnamon roll",
          roll_img_src: "assets/products/walnut-cinnamon-roll.jpg",
          roll_figcaption: "Walnut cinnamon roll",
          roll_img_alt: "Picture of walnut cinnamon roll",
          roll_base_price: "3.49",
          roll_price: "3.49",
          roll_type: "Walnut",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
          radioChecked: "radio1",
        },
        {
          roll_name: "Double-chocolate cinnamon roll",
          roll_img_src: "assets/products/double-chocolate-cinnamon-roll.jpg",
          roll_figcaption: "Double-chocolate cinnamon roll",
          roll_img_alt: "Picture of double chocolate cinnamon roll",
          roll_base_price: "3.99",
          roll_price: "3.99",
          roll_type: "Double-chocolate",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
          radioChecked: "radio1",
        },
        {
          roll_name: "Strawberry cinnamon roll",
          roll_img_src: "assets/products/strawberry-cinnamon-roll.jpg",
          roll_figcaption: "Strawberry cinnamon roll",
          roll_img_alt: "Picture of strawberry cinnamon roll",
          roll_base_price: "3.99",
          roll_price: "3.99",
          roll_type: "Strawberry",
          roll_glazing: "Keep original",
          roll_pack_size: "1",
          radioChecked: "radio1",
        }
      ],

      cartrollData: [],
      popUpVisible: false,
      totalPrice: "0.00",
      totalItems: 0,
      totalItemsText: " items",
      cartShowing: false,
      searchText: "",
      termToSearch: "",
      found: false,
      cart_roll_type: "Original",
      cart_roll_glazing: "Keep original",
      cart_roll_pack: 1,
      cart_roll_price: 2.49,

    };
    
    this.togglePopUp = this.togglePopUp.bind(this);
    this.toggleCart = this.toggleCart.bind(this);

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

  addToCartHandler = (cardIndex) => {
    const newRoll = this.state.rollcardData[cardIndex];

    let newCartRoll = {
      roll_name: newRoll.roll_name,
      roll_img_src: newRoll.roll_img_src,
      roll_figcaption: newRoll.roll_figcaption,
      roll_img_alt: newRoll.roll_img_alt,
      roll_base_price: newRoll.roll_base_price,
      roll_price: newRoll.roll_price,
      roll_type: newRoll.roll_type,
      roll_glazing: newRoll.roll_glazing,
      roll_pack_size: newRoll.roll_pack_size,
    }

    const newCartRollData = this.state.cartrollData
    newCartRollData.push(newCartRoll)

    let item_count = newCartRollData.length;
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
      cartrollData: newCartRollData,
      totalPrice: (parseFloat(this.state.totalPrice) + parseFloat(newRoll.roll_price)).toFixed(2),
      totalItems: item_count,
      totalItemsText: itemText,
    }))
  };

  removeButtonHandler = (rollIndex) => {
    const newCartRollData = this.state.cartrollData;
    let newTotalPrice = this.state.totalPrice;
    newTotalPrice = (parseFloat(newTotalPrice) - parseFloat(newCartRollData[rollIndex].roll_price)).toFixed(2)

    newCartRollData.splice(rollIndex, 1);

    let item_count = newCartRollData.length;
    let itemText = "";
    if (item_count == 1) {
      itemText = " item";
    } else {
      itemText = " items";
    }

    this.setState(prevState => ({
      ...prevState,
      totalPrice: newTotalPrice,
      totalItems: item_count,
      totalItemsText: itemText,
      cartrollData: newCartRollData
    }))
  };

  handleSearchTextChange = (event) => {
    let newTerm = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      searchText: newTerm
    }))
  };


  searchButtonHandler = () => {
    const newTermToSearch = this.state.searchText;
    this.setState(prevState => ({
      ...prevState,
      found: false,
      termToSearch: newTermToSearch
    }))
  };

  nameCompareHelper = (a, b) => {
    return function(a, b) {
    let compareValue = 0;
    if (a.roll_name > b.roll_name){
      compareValue = 1;
    }
    if (a.roll_name < b.roll_name){
      compareValue = -1;
    }
    if (a.roll_name == b.roll_name){
      compareValue = 0;
    }
    return compareValue;
  }
  };

  handleSortChange = (event) => {
    let sortValue = event.target.value;
    console.log(sortValue);
    let newRollData = this.state.rollcardData;

    if (sortValue == "Name"){
      newRollData = newRollData;
      newRollData.sort(this.nameCompareHelper())
    }

    if (sortValue == "Base Price"){
      newRollData.sort(function(a, b){return a.roll_base_price - b.roll_base_price})
    }
    console.log(newRollData)
    this.setState(prevState => ({
      ...prevState,
      rollcardData: newRollData
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

  toggleCart() {
    this.setState({
      cartShowing: !this.state.cartShowing
    })
  };

  render() {

    return (

      <div className = "HomePage">

        <div id = "container">

          <div className = "header_holder">
            {/* Used this for help better understanding parent and child components: https://medium.com/@livajorge7/introduction-9e84391f4b83#:~:text=The%20parent%20component%20can%20define%20a%20function%20and%20pass%20it,to%20maintain%2C%20and%20more%20flexible. */}
            <Header
            popUpVisible = {this.state.popUpVisible}
            cart_roll_type = {this.state.cart_roll_type}
            cart_roll_glazing = {this.state.cart_roll_glazing}
            cart_roll_pack = {this.state.cart_roll_pack}
            cart_roll_price = {this.state.cart_roll_price}
            onTogglePopUp = {this.togglePopUp}
            onToggleCart = {this.toggleCart}
            />
          </div>

        {this.state.cartShowing &&
          <div className = "cart_holder" >
          {(this.state.cartrollData.length == 0) &&
                <div className = "cart_empty_text">The cart is empty!</div>
          }
          {(this.state.cartrollData.length >= 1) &&
          <div className = "cart_shown_holder">
            <div className = "cart_shown_price_items_text_holder">
              <div className = "cart-items-text-shown">
                {`Shopping Cart (`+`${this.state.totalItems}`+ `${this.state.totalItemsText}`+`)`}
              </div>

              <div className = "cart-total-text-shown">
                {"Total: "+ `${this.state.totalPrice}`}
              </div>
            </div>

            <div className = "cartcard-list"> 
              {this.state.cartrollData.map((cartroll, idx) => {
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
                  onRemove = {this.removeButtonHandler}
                  />;
              }
              )}
            </div>
          </div>
        }
        </div>
          }

          <div className = "search_filter_container">
            <div className = "search_holder">
                <form className = "search_bar">
                  <input className = "text_bar" name="myInput" onChange={(event) => this.handleSearchTextChange(event)} value={this.state.searchText}/>
                  {/* Used these sources for help with the search bar:
                  https://www.w3schools.com/howto/howto_css_searchbar.asp
                  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_searchbar2 */}
                </form>
                <button className = "searchButton" onClick={() => this.searchButtonHandler()}>Search</button>
              </div>
            <div className = "filter_option">
                {/* Used the following sources for help calling functions with parameters in the jsx: 
                https://stackoverflow.com/questions/42597602/react-onclick-pass-event-with-parameter
                https://legacy.reactjs.org/docs/faq-functions.html */}
                <span className = "filter_text">sort by:</span>
                <select className = "filter_select" onChange={(event) => this.handleSortChange(event)}>
                    <option value={null} hidden = "hidden" >Name</option>
                    <option value="Name">Name</option>
                    <option value="Base Price">Base Price</option>
                </select>
            </div>
          </div>

          <div className = "section" id = "products_page">


            <div id = "rollcard-list"> 
              {this.state.rollcardData.map((rollcard, idx) => {
                // Used this to help figure out how to use includes in a way that's case insenitive
                // https://stackoverflow.com/questions/48145432/javascript-includes-case-insensitive
                if ((this.state.termToSearch == "") || 
                (rollcard.roll_figcaption.toLowerCase().includes(this.state.termToSearch.toLowerCase()))) {
                  this.state.found = true;
                  return <Roll
                    key={rollcard.roll_name}
                    cardIndex={idx}
                    roll_img_src={rollcard.roll_img_src}
                    roll_img_alt={rollcard.roll_img_alt}
                    roll_figcaption={rollcard.roll_figcaption}
                    roll_base_price={rollcard.roll_base_price}
                    roll_type={rollcard.roll_type}
                    roll_glazing={rollcard.roll_glazing}
                    roll_pack_size={rollcard.roll_pack_size}
                    radioChecked = {rollcard.radioChecked}
                    roll_price= {this.priceCalculator(rollcard.roll_base_price, rollcard.roll_glazing, rollcard.roll_pack_size)}
                    onGlazeChange={this.glazeChangeSelectorHandler}
                    onQuantityChange={this.quantityChangeHandler}
                    onAddCart={this.addToCartHandler}
                    onTogglePopUp={this.togglePopUp}
                    />
                } else {
                }
              })}

              { !this.state.found &&
                <div className = "search_empty_text">No Match!</div>
              }
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default HomePage;

