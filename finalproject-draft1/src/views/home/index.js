// Used lab activity (notecard) for reference

import React, { Component } from 'react';
// import { useState } from 'react';
import './index.css';
import Card from './card.js';
import CollectedMatch from './collectedmatch.js';
// import Header from './header.js';
// import Cart from './cart.js';
import {JackInTheBox, Fade} from "react-awesome-reveal";
import { AttentionSeeker } from "react-awesome-reveal";
import { Howl, Howler } from 'howler';
import { Link, Route, Routes } from 'react-router-dom';
import MenuPage from './menu.js';
// import newSound from './GameMusic_3DPlatformer.mp3';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          card_name: "Tree_Eng",
          term_text: "Tree_Eng",
          match: "Tree",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Tree_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Person_Jpn",
          term_text: "Person_Jpn",
          match: "Person",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Person_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Person_Eng",
          term_text: "Person_Eng",
          match: "Person",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Person_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Tree_Jpn",
          term_text: "Tree_Jpn",
          match: "Tree",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Tree_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Month_Eng",
          term_text: "Month_Eng",
          match: "Month",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Month_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Month_Jpn",
          term_text: "Month_Jpn",
          match: "Month",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Month_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Day_Eng",
          term_text: "Day_Eng",
          match: "Day",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Day_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Day_Jpn",
          term_text: "Day_Jpn",
          match: "Day",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Day_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Book_Eng",
          term_text: "Book_Eng",
          match: "Book",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Book_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Book_Jpn",
          term_text: "Book_Jpn",
          match: "Book",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Book_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Year_Eng",
          term_text: "Year_Eng",
          match: "Year",
          lang: "Eng",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Year_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Year_Jpn",
          term_text: "Year_Jpn",
          match: "Year",
          lang: "Jpn",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Year_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Country_Eng",
          term_text: "Country_Eng",
          match: "Country",
          lang: "Eng",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Country_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Country_Jpn",
          term_text: "Country_Jpn",
          match: "Country",
          lang: "Jpn",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Country_Card_Japanese.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Car_Eng",
          term_text: "Car_Eng",
          match: "Car",
          lang: "Eng",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Car_Card_English.png",
          front_img_alt: "Picture",
        },
        {
          card_name: "Car_Jpn",
          term_text: "Car_Jpn",
          match: "Car",
          lang: "Jpn",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Picture",
          front_img_src: "assets/cards/Car_Card_Japanese.png",
          front_img_alt: "Picture",
        },
      ],
      score: 0,
      hasFlippedCard: false,
      firstCard: "",
      secondCard: "",
      match: false,
      win: true,
      num_matches: 8,
      matchList: [],
      match_collection_expanded: false,
      instructions_expanded: false,
      music: false, 
      sound: new Howl({
        src: ["assets/GameMusic_3DPlatformer.mp3"],
        loop: true,
        volume: 0.5,
      })
    };

  };

  musicController = () => { 
    if (this.state.music == false){
      this.state.sound.play();
    }
    else {
      this.state.sound.pause()
    }
    let new_music_state = !this.state.music;
    this.setState({music: new_music_state});
  }

  checkState = () => { 
    console.log("parent state", this.state.matchList); 
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

  addToMatchHandler = (jpn_card) => {
    const newCard = jpn_card;

    let newCollectedCard = {
      card_name: newCard.props.card_name,
      card_img: newCard.props.card_front_img_src,
      card_img_alt: newCard.props.card_front_img_alt,
      card_match: newCard.props.card_match
    }

    const newMatchList = this.state.matchList
    newMatchList.push(newCollectedCard)

    this.setState(prevState => ({
      ...prevState,
      matchList: newMatchList,
    }))
  };

  matchCollectionExpansionHandler  = () => { 
    let new_state = !this.state.match_collection_expanded
    this.setState({match_collection_expanded: new_state}); 
  }

  instructionsExpansionHandler  = () => { 
    let new_state = !this.state.instructions_expanded
    this.setState({instructions_expanded: new_state}); 
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
      opacity: this.state.match ? .9 : 0,
      transition: "visibility 0.3s linear, opacity 0.3s linear"
      // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
      // transition: "transform 2s",
      // transformStyle: "preserve-3d"
    };

    const match_locker_state = {
      visibility: this.state.match ? 'visible': 'hidden',
    };

    const match_collection_state = {
      visibility: this.state.match_collection_expanded ? 'visible': 'hidden',
    };

    const instructions_state = {
      visibility: this.state.instructions_expanded ? 'visible' : 'hidden',
    };

    const win_state = {
      visibility: this.state.score == this.state.num_matches ? 'visible': 'hidden', 
      opacity: this.state.win ? 1 : 0,
      transition: "visibility 0.3s linear,opacity 0.3s linear"
      // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
      // transition: "transform 2s",
      // transformStyle: "preserve-3d"
    };

    // const music_state = {
    //   style : this.state.music ? , 
    //   // transform: this.state.flip == true ? `rotateY(-180deg)` : `rotateY(-180deg)`,
    //   // transition: "transform 2s",
    //   // transformStyle: "preserve-3d"
    // };

    return (
    

      <div className = "Outside">
      <div className = "HomePage">
      <button className= {this.state.music ? 'music_button_true' : 'music_button_false'} onClick={() => {this.musicController()}}></button>
        <button className='help_button' onClick={() => {this.instructionsExpansionHandler()}}>How to Play</button>
        <div className='help_message' style = {instructions_state}>
          <div className = "help_text"> Flip over cards to try to match the Japanese characters to their English meaning!</div>
          <button className='close_button' onClick={() => {this.instructionsExpansionHandler()}}></button>
        </div>

        {/* <Link className='menu_button' to="/menupage">Moji Match</Link> */}
        {/* <form action="portfolio.html">
          <button type="link" class="menu_button">Moji Match</button>
        </form> */}
        <Link to="/"><button className='menu_button'>Moji Match</button></Link>
        <div className='matches_counter_small'>
          Matches:
          <div className = "score_holder">
            {this.state.score}
          </div>
          <button className='expand_button' onClick={() => {this.matchCollectionExpansionHandler()}}></button>
        </div>

        <div className='matches_counter_expanded' style={match_collection_state}>
          Matches: {this.state.score}
          {/* <div className = "score_holder_expanded">
            {this.state.score}
          </div> */}
          <div className = "matches_made_holder">
          {this.state.matchList.map((collected_matchcard, idx) => 
                   <CollectedMatch
                      key={idx}
                      collectedIndex={idx}
                      card_name={collected_matchcard.card_name}
                      card_img={collected_matchcard.card_img}
                      card_img_alt={collected_matchcard.card_img_alt}
                      card_match={collected_matchcard.card_match}
                    />
              )}
          </div>
          <button className='minimize_button' onClick={() => {this.matchCollectionExpansionHandler()}}></button>
        </div>

        {/* <div className = 'test_holder' style={message_state}> */}
        {/* <Fade> */}
          <div className='match_message'style={message_state} >
            MATCH!
          </div>
        {/* </Fade> */}
          {/* </div> */}
        <div className = "match_locker" style={match_locker_state}>

        </div>

        <div className='win_message' style={win_state}>
          {/* <AttentionSeeker effect='bounce'> */}
            <img className = "winning_squid" src = {"assets/Squid_Happy.png"} width = "200" alt = {"ADD"}  />
          {/* </AttentionSeeker> */}
        {/* <img className = "winning_squid" src = {"assets/Squid_Happy.png"} width = "200" alt = {"ADD"}  /> */}
          <div className='winning_text'>CONGRATS! You've won! Great job studying!</div>
          <div className='winning_button_holder'>
          <Link to="/"><button className='back_to_menu_button'>Return to Menu</button></Link>
            {/* <button className='play_again_button' onClick={() => {this.checkState()}}>Play Again</button> */}
          </div>
        </div>


            <div className = "rollcard-list"> 

              
              {this.state.cardData.map((matchcard, idx) => 
                   <Card
                    key={matchcard.card_name}
                    card_name = {matchcard.card_name}
                    cardIndex={idx}
                    card_term_text={matchcard.term_text}
                    card_back_img_src={matchcard.back_img_src}
                    card_back_img_alt={matchcard.back_img_alt}
                    card_front_img_src={matchcard.front_img_src}
                    card_front_img_alt={matchcard.front_img_alt}
                    card_match = {matchcard.match}
                    card_lang = {matchcard.lang}
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
                    addToMatchHandler = {this.addToMatchHandler}
                    />
              )}



              
            </div>

          </div>

        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/gamepage" element={<GamePage />} />
        </Routes>

        </div>

        

    );
  }
}

export default GamePage;

