// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from "react";
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: false,
      hasFlippedCard: false,
      firstCard: "",
      secondCard: "",
    };   
  }


  toggleFlip() {

    let hasFlippedCard_var = this.state.hasFlippedCard;
    let firstCard_var = this.state.firstCard;

    if (this.state.hasFlippedCard == true) {
      if (this.props.card_match == this.state.firstCard.card_match){
        this.state.firstCard.removeEventListener('click');
        this.removeEventListener('click');
      }
    }

    if (this.state.hasFlippedCard == false) {
      console.log("flippy",)
      let hasFlippedCard_var = true;
      let firstCard_var = this;
    }


    this.setState({
      flip: !this.state.flip,
      hasFlippedCard: hasFlippedCard_var,
      firstCard: firstCard_var
    })
    console.log(this.state.flip)

    // if (!this.state.hasFlippedCard) {
    //   hasFlippedCard = true;
    //   firstCard = this;
    // }
  };

  render() {

    const flip_state = {
      transform: this.state.flip ? 'rotatey(180deg)' : '', 
      // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
      transition: "transform 2s",
      transformStyle: "preserve-3d"
    };

    return (

        // <article className = "roll_card" >
        // <div className='outer'>

          // <div className='holder' onClick={() => {this.toggleFlip()}} style = {flip_state}>

            // {/* <div classname = "outer">  */}
                <div className= "memory_card" onClick={() => {this.toggleFlip()}} style = {flip_state}>
                    <img className = "back-face" src = {this.props.card_back_img_src} width = "200" alt = {this.props.card_back_img_alt} />
                    <img className = "front-face" src = {this.props.card_front_img_src} width = "200" alt = {this.props.card_front_img_alt} />
                </div>
            // {/* </div> */}

          // </div>
        // </div>


            
      // </article>

    );
  }
}

export default Card;