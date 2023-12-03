
import React, { Component } from 'react';
import { useState } from "react";
import './collectedmatch.css';

class CollectedMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };   
  }


  render() {

    return (

        <div className= "collected_card">
            <img className = "jpn_card" src = {this.props.card_img} alt = {this.props.card_img_alt} />
            <div className= "collected_definition">{this.props.card_match}</div>
        </div>      

    );
  }
}

export default CollectedMatch;