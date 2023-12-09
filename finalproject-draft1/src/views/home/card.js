// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from "react";
import './card.css';


class Card extends Component {
  constructor(props) {
    super(props);
    this.toggleFlip.bind(this); 
    this.toggleFlipAction.bind(this); 
    this.state = {
      flip: false,
      matched: false,
      // hasFlippedCard: false,
      // firstCard: "",
      // secondCard: "",
    };   
  }


  // toggleFlip() {

  //   let hasFlippedCard_var = this.state.hasFlippedCard;
  //   let firstCard_var = this.state.firstCard;

  //   if (this.state.hasFlippedCard == true) {
  //     if (this.props.card_match == this.state.firstCard.card_match){
  //       this.state.firstCard.removeEventListener('click');
  //       this.removeEventListener('click');
  //     }
  //   }

  //   if (this.state.hasFlippedCard == false) {
  //     console.log("flippy",)
  //     let hasFlippedCard_var = true;
  //     let firstCard_var = this;
  //   }


  //   this.setState({
  //     flip: !this.state.flip,
  //     // hasFlippedCard: hasFlippedCard_var,
  //     // firstCard: firstCard_var
  //   })
  //   console.log(this.state.flip)

  //   this.props.setParentFlippedCard(hasFlippedCard_var)

  //   // if (!this.state.hasFlippedCard) {
  //   //   hasFlippedCard = true;
  //   //   firstCard = this;
  //   // }
  // };

  // check_match

  // toggleFlip() {
  //   let new_flip_state = !this.state.flip;
  //   this.setState({
  //     flip: new_flip_state,
  //     // hasFlippedCard: hasFlippedCard_var,
  //     // firstCard: firstCard_var
  //   })
  // }

  toggleFlipAction() {

    console.log("flip_state 1", this.state.flip)

    // this.setState({
    //   flip: !this.state.flip,
    //   // hasFlippedCard: hasFlippedCard_var,
    //   // firstCard: firstCard_var
    // })
    // console.log("flip_state 2", this.state.flip)

    // this.setState({
    //   flip: true,
    //   // hasFlippedCard: hasFlippedCard_var,
    //   // firstCard: firstCard_var
    // })
    // console.log("wassup", this.props.hasFlippedCard);
    let hasFlippedCard_var = this.props.hasFlippedCard;
    let firstCard_var = this.props.firstCard;
    let secondCard_var = this.props.secondCard;

    if (hasFlippedCard_var == true) {
      this.props.setParentSecondCard(this)
      // console.log("match 1:", this.props.card_match, "match 2:", this.props.firstCard.props.card_match);
      if (this.props.card_match == this.props.firstCard.props.card_match){
        console.log("match");
        // this.props.firstCard.removeEventListener('click');
        // this.removeEventListener('click');
        // console.log("hello");
        let collected_card_choice = ""
        setTimeout(() => { 
          let new_match_state = true;
          this.props.setParentMatch(new_match_state)
          if (this.props.card_lang == "Jpn"){
            collected_card_choice = this;
          }
          else {
            collected_card_choice = this.props.firstCard;
          }
          console.log("card", collected_card_choice )
          this.props.addToMatchHandler(collected_card_choice);
        }, 1000); 

        setTimeout(() => { 
          let matched_first_card = this.props.firstCard;
          matched_first_card.state.matched = true;
          // this.props.firstCard.state.flip = false;
          let new_matched_state = true;
          let new_match_state2 = false;
          console.log("score", this.props.score)
          let prev_score = parseInt(this.props.score)
          let new_score = prev_score + 1
          this.setState({
            matched: new_matched_state,
            // hasFlippedCard: hasFlippedCard_var,
            // firstCard: firstCard_var
          })
          this.props.setParentFirstCard(matched_first_card)
          this.props.setParentMatch(new_match_state2)
          this.props.setParentScore(new_score)
        }, 2000); 
        

      }
      else {
        console.log("no match");
        // this.props.firstCard.flip = false;
        // this.setState({
        //   flip: false,
        //   // hasFlippedCard: hasFlippedCard_var,
        //   // firstCard: firstCard_var
        // })
        setTimeout(() => { 
          let flipped_first_card = this.props.firstCard;
          flipped_first_card.state.flip = false;
          // this.props.firstCard.state.flip = false;
          let new_flip_state = !this.state.flip;
          this.setState({
            flip: new_flip_state,
            // hasFlippedCard: hasFlippedCard_var,
            // firstCard: firstCard_var
          })
          this.props.setParentFirstCard(flipped_first_card)

      }, 2000); 
        // this.setState({
        //   flip: new_flip_state,
        //   // hasFlippedCard: hasFlippedCard_var,
        //   // firstCard: firstCard_var
        // })
        // // this.props.setParentmatch(false)

      }
      // this.props.setParentFirstCard("")
      // this.props.setParentSecondCard("")
      this.props.setParentFlippedCard(false)
    }

    if (this.props.hasFlippedCard == false) {
      console.log("flippy",)
      hasFlippedCard_var = true;
      firstCard_var = this;
      console.log(firstCard_var)
      this.props.setParentFirstCard(firstCard_var)
      this.props.setParentFlippedCard(hasFlippedCard_var)

    }

    // this.setState({
    //   flip: true,
    //   // hasFlippedCard: hasFlippedCard_var,
    //   // firstCard: firstCard_var
    // })


    // this.setState({
    //   flip: !this.state.flip,
    //   // hasFlippedCard: hasFlippedCard_var,
    //   // firstCard: firstCard_var
    // })
    // console.log(this.state.flip)

    // if (!this.state.hasFlippedCard) {
    //   hasFlippedCard = true;
    //   firstCard = this;
    // }
  };

  toggleFlip() {
    let new_flip_state = !this.state.flip;
    this.setState({
      flip: new_flip_state,
      // hasFlippedCard: hasFlippedCard_var,
      // firstCard: firstCard_var
    }, this.toggleFlipAction)
  }

  render() {

    const flip_state = {
      transform: this.state.flip ? 'rotatey(180deg)' : '', 
      // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
      transition: "transform 1s",
      transformStyle: "preserve-3d"
    };

    const visible_state = {
      visibility: this.state.matched ? 'hidden' : 'visible', 
      opacity: this.state.matched ? 0 : 1,
      transition: "visibility 0.3s linear,opacity 0.3s linear"
      // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
      // transition: "transform 2s",
      // transformStyle: "preserve-3d"
    };

     const flip_matched_state = {
      visibility: this.state.matched ? 'hidden' : 'visible',
      transform: this.state.flip ? 'rotatey(180deg)' : '', 
      // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
      transition: "transform 2s",
      transformStyle: "preserve-3d"
    };

    // const visible_state = {
    //   visibility: this.state.matched ? 'hidden' : 'visible', 
    //   // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
    //   // transition: "transform 2s",
    //   // transformStyle: "preserve-3d"
    // };

    return (

        // <article className = "roll_card" >
        // <div className='outer'>

          // <div className='holder' onClick={() => {this.toggleFlip()}} style = {flip_state}>

            // {/* <div classname = "outer">  */}
                // <div className= "memory_card" onClick={() => {{this.toggleFlip()}; {this.toggleFlipAction()}}} style = {flip_state}>
                <div className= "memory_card" onClick={() => {{this.toggleFlip()}}} style = {flip_matched_state}>
                    <img className = "back-face" src = {this.props.card_back_img_src} width = "200" alt = {this.props.card_back_img_alt} style={visible_state} />
                    <img className = "front-face" src = {this.props.card_front_img_src} width = "200" alt = {this.props.card_front_img_alt} style={visible_state}  />
                </div>
            // {/* </div> */}

          // </div>
        // </div>


            
      // </article>

    );
  }
}

export default Card;