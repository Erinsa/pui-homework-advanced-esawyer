// Used lab activity (notecard) for reference

import React, { Component } from 'react';
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
      ]

    };

  };

  // toggleFlip() {
  //   this.setState({
  //     flip_state: !this.state.flip
  //   })
  // };

  render() {

    return (
    

      <div className = "Outside">
      <div className = "HomePage">
      <button className='help_button'>How to Play</button>
      <button className='menu_button'>Moji Match</button>

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
                    // card_has_flipped = {hasFlippedCard}
                    // firstCard = {}

                    onToggleFlip = {this.toggleFlip}
                    />
              )}


              
            </div>

          </div>

        </div>

    );
  }
}

export default HomePage;

