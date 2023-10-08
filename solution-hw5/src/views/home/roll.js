// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from "react";
import './roll.css';

class Roll extends Component {
  constructor(props) {
    super(props);
    this.state = {};   
  }

  render() {

    // Inline style for when quanity button 1 is selected or not
    const buttonStyle1 = {
        flex: "1 0 auto",
        fontSize: "14pt",
        padding: "5px 10px 5px 9px",
        border: "2px solid black",
        marginLeft: "5px",
        backgroundColor: this.props.radioChecked == "radio1" ? "lightgray" : "white",
    }
    
    // Inline style for when quanity button 3 is selected or not
    const buttonStyle3 = {
        flex: "1 0 auto",
        fontSize: "14pt",
        padding: "5px 10px 5px 9px",
        border: "2px solid black",
        marginLeft: "5px",
        backgroundColor: this.props.radioChecked == "radio3" ? "lightgray" : "white",
    }

    // Inline style for when quanity button 6 is selected or not
    const buttonStyle6 = {
        flex: "1 0 auto",
        fontSize: "14pt",
        padding: "5px 10px 5px 9px",
        border: "2px solid black",
        marginLeft: "5px",
        backgroundColor: this.props.radioChecked == "radio6" ? "lightgray" : "white",
    }

    // Inline style for when quanity button 12 is selected or not
    const buttonStyle12 = {
        flex: "1 0 auto",
        fontSize: "14pt",
        padding: "5px 10px 5px 9px",
        border: "2px solid black",
        marginLeft: "5px",
        backgroundColor: this.props.radioChecked == "radio12" ? "lightgray" : "white",
    }

    return (

        <article className = "roll_card">

            <div> 
                <figure className= "roll_figure">
                    <img className = "product_image" src = {this.props.roll_img_src} width = "200" alt = {this.props.roll_img_alt} />
                    <figcaption className = "roll_title">{this.props.roll_figcaption}</figcaption>
                </figure>
            </div>

            <div className = "outer">

                <div className = "row">
                    <div className = "item text">
                        <p>Glazing:</p>
                    </div>
                    <div className = "item option">
                        {/* Used the following sources for help calling functions with parameters in the jsx: 
                        https://stackoverflow.com/questions/42597602/react-onclick-pass-event-with-parameter
                        https://legacy.reactjs.org/docs/faq-functions.html */}
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

                            {/*Used this to help troubleshoot glitch due to using checked as an attribute: https://stackoverflow.com/questions/48423061/radio-buttons-need-to-click-twice-to-reflect-change */}
                            <label className = "quantity_buttons">
                            <input value = '1' type = "radio" name = {`radio_${this.props.cardIndex}`} defaultChecked = "checked" onClick={(event) => this.props.onQuantityChange(event, this.props.cardIndex)}/>
                            {/* Used this for help adding two classes w/ react and jsx: https://stackoverflow.com/questions/34521797/how-to-add-multiple-classes-to-a-reactjs-component */}
                            <span className ={"new_quantity_button "+ `radio_${this.props.cardIndex}`} style={buttonStyle1}>1</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input value = '3' type = "radio" name = {`radio_${this.props.cardIndex}`} onClick={(event) => this.props.onQuantityChange(event, this.props.cardIndex)}/>
                            <span className ={"new_quantity_button "+ `radio_${this.props.cardIndex}`} style={buttonStyle3}>3</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input value = '6' type = "radio" name = {`radio_${this.props.cardIndex}`} onClick={(event) => this.props.onQuantityChange(event, this.props.cardIndex)} />
                            <span className ={"new_quantity_button "+ `radio_${this.props.cardIndex}`} style={buttonStyle6}>6</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input value = '12' type="radio" name= {`radio_${this.props.cardIndex}`} onClick={(event) => this.props.onQuantityChange(event, this.props.cardIndex)}/>
                            <span className ={"new_quantity_button "+ `radio_${this.props.cardIndex}`} style={buttonStyle12}>12</span>
                            </label>

                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "item text">
                        <div className = "price_text">
                            <p>{`$ ${this.props.roll_price}`}</p>
                        </div>
                    </div>
                    <div className = "item option">
                        {/* Used this for help calling multple functions with onClick: https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs */}
                        <button className = "cart_button" onClick={() => {this.props.onAddCart(this.props.cardIndex); this.props.onTogglePopUp();}}>Add to cart</button>
                    </div>
                </div>

            </div>
            
      </article>

    );
  }
}

export default Roll;