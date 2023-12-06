// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import './App.css';
import GamePage from './views/home/index.js';
import MenuPage from './views/home/menu.js';
import { Link, Route, Routes, Switch } from 'react-router-dom';
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//     <p>Welcome to our homepage!</p>
//   </div>
// );

class App extends Component {

  render() {
    return (
      <div className = "App">
        {/* <div className = "bkg">
        HEllo
        </div> */}
        {/* <img className = "winning_squid" src = {"assets/Squid_Happy.png"} width = "200" alt = {"ADD"}  /> */}

        {/* <ul className="appy">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/gamepage">
                                About Us
                            </Link>
                        </li>

                    </ul> */}
  
       <Routes>
          <Route exact path="/" element={<MenuPage />} />
          {/* <Route path="/menupage" element={<MenuPage />} /> */}
          <Route path="/gamepage" element={<GamePage />} />
      </Routes>
        {/* <Switch>
              <Route exact path='/' component={MenuPage} />
              <Route path='/game' component={GamePage} />
          </Switch> */}
      </div>
      // </div>
        
    );
  }
}
  
export default App;


