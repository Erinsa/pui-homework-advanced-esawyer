// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from 'react';
import './index.css';
import Card from './card.js';
// import Header from './header.js';
// import Cart from './cart.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          card_name: "Tree_Eng",
          term_text: "Tree_Eng",
          match: "Tree",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Tree_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Person_Jpn",
          term_text: "Person_Jpn",
          match: "Person",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Person_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Person_Eng",
          term_text: "Person_Eng",
          match: "Person",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Person_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Tree_Jpn",
          term_text: "Tree_Jpn",
          match: "Tree",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Tree_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Month_Eng",
          term_text: "Month_Eng",
          match: "Month",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Month_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Month_Jpn",
          term_text: "Month_Jpn",
          match: "Month",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Month_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Day_Eng",
          term_text: "Day_Eng",
          match: "Day",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Day_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Day_Jpn",
          term_text: "Day_Jpn",
          match: "Day",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Day_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        // {
        //   card_name: "Tree_Eng2",
        //   term_text: "Tree_Eng",
        //   match: "Tree",
        //   back_img_src: "assets/cards/Card_Back.png",
        //   back_img_alt: "Picture",
        //   front_img_src: "assets/cards/Tree_Card_English.png",
        //   front_img_alt: "Picture",
        // },
        // {
        //   card_name: "Person_Jpn2",
        //   term_text: "Person_Jpn",
        //   match: "Person",
        //   back_img_src: "assets/cards/Card_Back.png",
        //   back_img_alt: "Picture",
        //   front_img_src: "assets/cards/Person_Card_Japanese.png",
        //   front_img_alt: "Picture",
        // },
        // {
        //   card_name: "Person_Eng2",
        //   term_text: "Person_Eng",
        //   match: "Person",
        //   back_img_src: "assets/cards/Card_Back.png",
        //   back_img_alt: "Picture",
        //   front_img_src: "assets/cards/Person_Card_English.png",
        //   front_img_alt: "Picture",
        // },
        // {
        //   card_name: "Tree_Jpn2",
        //   term_text: "Tree_Jpn",
        //   match: "Tree",
        //   back_img_src: "assets/cards/Card_Back.png",
        //   back_img_alt: "Picture",
        //   front_img_src: "assets/cards/Tree_Card_Japanese.png",
        //   front_img_alt: "Picture",
        // },
        // {
        //   card_name: "Month_Eng2",
        //   term_text: "Month_Eng",
        //   match: "Month",
        //   back_img_src: "assets/cards/Card_Back.png",
        //   back_img_alt: "Picture",
        //   front_img_src: "assets/cards/Month_Card_English.png",
        //   front_img_alt: "Picture",
        // },
        // {
        //   card_name: "Month_Jpn2",
        //   term_text: "Month_Jpn",
        //   match: "Month",
        //   back_img_src: "assets/cards/Card_Back.png",
        //   back_img_alt: "Picture",
        //   front_img_src: "assets/cards/Month_Card_Japanese.png",
        //   front_img_alt: "Picture",
        // },
        // {
        //   card_name: "Day_Eng2",
        //   term_text: "Day_Eng",
        //   match: "Day",
        //   back_img_src: "assets/cards/Card_Back.png",
        //   back_img_alt: "Picture",
        //   front_img_src: "assets/cards/Day_Card_English.png",
        //   front_img_alt: "Picture",
        // },
        // {
        //   card_name: "Day_Jpn2",
        //   term_text: "Day_Jpn",
        //   match: "Day",
        //   back_img_src: "assets/cards/Card_Back.png",
        //   back_img_alt: "Picture",
        //   front_img_src: "assets/cards/Day_Card_Japanese.png",
        //   front_img_alt: "Picture",
        // },
      ],
      score: 0,
      hasFlippedCard: false,
      firstCard: "",
      secondCard: "",
      match: false,

    };

  };

  checkState = () => { 
    console.log("parent state", this.state.firstCard); 
  } 

  setParentFlippedCard = (new_flip_state) => { 
    this.setState({hasFlippedCard: new_flip_state}); 
  } 

  setParentFirstCard = (new_first_card) => { 
    this.setState({firstCard: new_first_card}); 
  } 

  setParentSecondCard = (new_second_card) => { 
    this.setState({secondCard: new_second_card}); 
  } 

  setParentMatch = (new_match) => { 
    this.setState({match: new_match}); 
  }

  setParentScore = (new_score) => { 
    this.setState({score: new_score}); 
  }

  // toggleFlip() {
  //   this.setState({
  //     flip_state: !this.state.flip
  //   })
  // };

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
  //     hasFlippedCard: hasFlippedCard_var,
  //     firstCard: firstCard_var
  //   })
  //   console.log(this.state.flip)

  //   // if (!this.state.hasFlippedCard) {
  //   //   hasFlippedCard = true;
  //   //   firstCard = this;
  //   // }
  // };

  render() {

    const message_state = {
      visibility: this.state.match ? 'visible': 'hidden', 
      opacity: this.state.match ? 1 : 0,
      transition: "visibility 0.3s linear,opacity 0.3s linear"
      // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
      // transition: "transform 2s",
      // transformStyle: "preserve-3d"
    };

    return (
    

      <div className = "Outside">
      <div className = "HomePage">
        <button className='help_button' onClick={() => {this.checkState()}}>How to Play</button>
        <button className='menu_button'>Moji Match</button>
        <div className='matches_counter'>
          Matches:
          <div className = "score_holder">
            {this.state.score}
          </div>
          <button className='expand_button'></button>
        </div>

        <div className='match_message' style={message_state}>
          MATCH!
        </div>

            <div className = "rollcard-list"> 


              {this.state.cardData.map((matchcard, idx) => 
                   <Card
                    key={matchcard.card_name}
                    cardIndex={idx}
                    card_term_text={matchcard.term_text}
                    card_back_img_src={matchcard.back_img_src}
                    card_back_img_alt={matchcard.back_img_alt}
                    card_front_img_src={matchcard.front_img_src}
                    card_front_img_alt={matchcard.front_img_alt}
                    card_match = {matchcard.match}
                    hasFlippedCard = {this.state.hasFlippedCard}
                    // firstCard = {}
                    firstCard = {this.state.firstCard}
                    secondCard = {this.state.secondCard}
                    score = {this.state.score}

                    // onToggleFlip = {this.toggleFlip}
                    setParentFlippedCard = {this.setParentFlippedCard}
                    setParentFirstCard = {this.setParentFirstCard}
                    setParentSecondCard = {this.setParentSecondCard}
                    setParentMatch = {this.setParentMatch}
                    setParentScore = {this.setParentScore}
                    />
              )}


              
            </div>

          </div>

        </div>

    );
  }
}

export default HomePage;

