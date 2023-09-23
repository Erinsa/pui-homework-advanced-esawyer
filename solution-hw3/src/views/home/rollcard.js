// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import './rollcard.css';

class RollCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};    
  }

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
                        <select className = "glaze_select">
                            <option value="0">Keep original</option>
                            <option value="1">Sugar milk</option>
                            <option value="2">Vanilla milk</option>
                            <option value="3">Double chocolate</option>
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
                            <input type = "radio" name = {`radio_${this.props.cardIndex}`} defaultChecked = "checked" />
                            <span className ="new_quantity_button">1</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input type = "radio" name = {`radio_${this.props.cardIndex}`}/>
                            <span className ="new_quantity_button">3</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input type = "radio" name = {`radio_${this.props.cardIndex}`} />
                            <span className ="new_quantity_button">6</span>
                            </label>

                            <label className ="quantity_buttons">
                            <input type="radio" name= {`radio_${this.props.cardIndex}`} />
                            <span className ="new_quantity_button">12</span>
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
                        <button className = "cart_button">Add to cart</button>
                    </div>
                </div>

            </div>
            
      </article>

    );
  }
}

export default RollCard;