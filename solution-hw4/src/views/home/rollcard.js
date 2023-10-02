// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from "react";
import './rollcard.css';



class RollCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};    
  }

  

//   priceCalculator (base_price, glaze_price_adjust, quantity_price_adjust) {


//     let new_price = ((parseFloat(base_price) + parseFloat(glaze_price_adjust)) * parseFloat(quantity_price_adjust)).toFixed(2);
  
//     // returning calculated price
//     return new_price;
  
//   }

  priceCalculator (base_price, glazing, quantity) {

    const glazes = {"Keep original": 0.00, "Sugar milk": 0.00, "Vanilla milk": 0.50, "Double chocolate": 1.50};
    const quantities = {"1": 1, "3": 3, "6": 5, "12": 10};
    console.log("glazing", glazing)
    let glaze_price_adjust = glazes[glazing];
    let quantity_price_adjust = quantities[quantity];
    

    let new_price = ((parseFloat(base_price) + parseFloat(glaze_price_adjust)) * parseFloat(quantity_price_adjust)).toFixed(2);
  
    // returning calculated price
    return new_price;
  
  }

//   handleSelectChange = (event) => {
//     console.log("event happened", this);
//     const selectValue = event.target.value;
//     console.log("val: ", event.target.value);
//     console.log("data", this.state.rollcardData);
//     let newrollcardData = this.state.rollcardData;
//     newrollcardData[this.state.cardIndex].roll_glazing = this.state.roll_glazing;
//     console.log("event: ", event.target);
//     console.log("index", this.state.cardIndex);
//     this.setState(prevState => ({
//       ...prevState,
//       rollcardData: newrollcardData,
//     }))
//   };

//   handleSelectChange = (event) => {
//     console.log("event happened", this);
//     const selectValue = event.target.value;
//     console.log("val: ", event.target.value);
//     this.setState(prevState => ({
//       ...prevState,
//       roll_glazing: selectValue,
//     }))
//     console.log("event: ", event.target);
//     console.log("index", this.state.cardIndex);
//   };

  
//   handleSelectChange = (event) => {
//     console.log("event happened", this);
//     const selectValue = event.target.value;
//     console.log("val: ", event.target.value);
//     this.roll_glazing = selectValue;
//     console.log("event happened2", this);
//     console.log("event: ", event.target);
//     console.log("index", this.state.cardIndex);
//   };


  handleAddCart = (event) => {
    console.log("thing", this);
  };

  render() {
    return (


        <article className = "roll_card">

            <div> 
                <figure>
                    <img className = "product_image" src = {this.props.roll_img_src} width = "200" alt = {this.props.roll_img_alt} />
                    <figcaption>{this.props.roll_figcaption}</figcaption>
                </figure>
            </div>

            <div className = "outer">

                <div className = "row">
                    <div className = "item text">
                        <p>Glazing:</p>
                    </div>
                    <div className = "item option">
                        {/* <select className = "glaze_select" onChange={this.handleSelectChange}> */}
                        <select className = "glaze_select" onChange={(event) => this.props.onGlazeChange(event, this.props.cardIndex)}>
                            <option value="Keep original">Keep original</option>
                            <option value="Sugar milk">Sugar milk</option>
                            <option value="Vanilla milk">Vanilla milk</option>
                            <option value="Double chocolate">Double chocolate</option>
                        </select>
                    </div>
                </div>

                <div className = "row">
                    <div className = "item text">
                        <p>Pack size:</p>
                    </div>
                    <div className = "item option">
                        <div className = "quantity_button_container">

                            {/*Used this to help troubleshoot glicth due to using checked as an attribute: https://stackoverflow.com/questions/48423061/radio-buttons-need-to-click-twice-to-reflect-change */}
                            <label className = "quantity_buttons">
                            <input value = '1' type = "radio" name = {`radio_${this.props.cardIndex}`} defaultChecked = "checked" onClick={(event) => this.props.onQuantityChange(event, this.props.cardIndex)}/>
                            <span className ={"new_quantity_button "+ `radio_${this.props.cardIndex}`}>1</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input value = '3' type = "radio" name = {`radio_${this.props.cardIndex}`} onClick={(event) => this.props.onQuantityChange(event, this.props.cardIndex)}/>
                            <span className ={"new_quantity_button "+ `radio_${this.props.cardIndex}`}>3</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input value = '6' type = "radio" name = {`radio_${this.props.cardIndex}`} onClick={(event) => this.props.onQuantityChange(event, this.props.cardIndex)} />
                            <span className ={"new_quantity_button "+ `radio_${this.props.cardIndex}`}>6</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input value = '12' type="radio" name= {`radio_${this.props.cardIndex}`} onClick={(event) => this.props.onQuantityChange(event, this.props.cardIndex)}/>
                            <span className ={"new_quantity_button "+ `radio_${this.props.cardIndex}`}>12</span>
                            </label>

                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "item text">
                        <div className = "price_text">
                            <p>{`$ ${this.props.roll_price}`}</p>
                            {/* <p>{`$ ${this.priceCalculator.bind(this, this.roll_base_price, this.roll_glazing, this.roll_pack_size)}`}</p> */}
                            {/* <p>{`$ ${value={this.state.editorNoteTitle}}`}</p> */}
                            {/* priceCalculator (this.props.roll_base_price, glaze_price_adjust, quantity_price_adjust) */}
                        </div>
                    </div>
                    <div className = "item option">
                        <button className = "cart_button" onClick={(event) => {this.props.onAddCart(event, this.props.cardIndex); this.props.onTogglePopUp();}}>Add to cart</button>
                    </div>
                </div>

            </div>
            
      </article>

    );
  }
}

export default RollCard;