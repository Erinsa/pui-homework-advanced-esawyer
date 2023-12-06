import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import GamePage from './index.js';
// import { useState } from 'react';
import { AttentionSeeker } from "react-awesome-reveal";
import './menu.css';

class MenuPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    };
  
  
    render() {
  
      
      return (
      
  
      <div className = "Outside">
        <div className = "menu_page">
            <div className='main_holder'>
            <Link to="/gamepage"><button className='play_button'>Play!</button></Link>
          <button className='menu_menu_button'>Moji Match</button>
          {/* <AttentionSeeker effect = "pulse"> */}
          <img className = "menu_squid" src = {"assets/Menu_Squid.png"} width = "200" alt = {"ADD"}  />
          {/* </AttentionSeeker> */}
          <img className = "menu_bubble" src = {"assets/Menu_Bubble.png"} width = "200" alt = {"ADD"}  />

          {/* <Link to="/gamepage"><button className='menu_menu_button'>Moji Match</button></Link> */}

          {/* <Routes>
          <Route path="/" element={<MenuPage />} />
            {/* <Route path="/menupage" element={<MenuPage />} /> */}
            {/* <Route path="/menupage" element={<MenuPage />} /> */}
            {/* <Route path="/gamepage" element={<GamePage />} />
          </Routes> */}
  
        </div>
  
        </div>
        </div>
  
      );
    }
  }
  
  export default MenuPage;
  
  