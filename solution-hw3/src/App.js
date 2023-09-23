import logo from './logo.svg';
import './App.css';
import RollCard from './rollcard.js';
import HeaderChunk from './header.js';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {

      super(props);
      this.state = {
        notecardData: [
          {
            roll_img_src: "assets/products/original-cinnamon-roll.jpg",
            roll_figcaption: "Original cinnamon roll",
            roll_price: "2.49",
            roll_img_alt: "Picture of original cinnamon roll"
          },
          {
            roll_img_src: "assets/products/apple-cinnamon-roll.jpg",
            roll_figcaption: "Apple cinnamon roll",
            roll_price: "3.49",
            roll_img_alt: "Picture of apple cinnamon roll"
          },
          {
            roll_img_src: "assets/products/raisin-cinnamon-roll.jpg",
            roll_figcaption: "Raisin cinnamon roll",
            roll_price: "2.99",
            roll_img_alt: "Picture of raisin cinnamon roll"
          },
          {
            roll_img_src: "assets/products/walnut-cinnamon-roll.jpg",
            roll_figcaption: "Walnut cinnamon roll",
            roll_price: "3.49",
            roll_img_alt: "Picture of walnut cinnamon roll"
          },
          {
            roll_img_src: "assets/products/double-chocolate-cinnamon-roll.jpg",
            roll_figcaption: "Double-chocolate cinnamon roll",
            roll_price: "3.99",
            roll_img_alt: "Picture of double chocolate cinnamon roll"
          },
          {
            roll_img_src: "assets/products/strawberry-cinnamon-roll.jpg",
            roll_figcaption: "Strawberry cinnamon roll",
            roll_price: "3.99",
            roll_img_alt: "Picture of strawberry cinnamon roll"
          }
        //   {
        //     imageURL: "assets/warhol-orangutan.png" ,
        //     noteTitle: "This is the Second Note" ,
        //     noteBody: "And here is some body text for the second note! What could be next?",
        //     noteFooter: "Sep 1 2022, 10:25"
        //   },
        //   {
        //     imageURL: "assets/warhol-eagle.png" ,
        //     noteTitle: "This is the Third Note" ,
        //     noteBody: "Yep, you guessed it, here is some body text for the third note." ,
        //     noteFooter: "Sep 1 2022, 10:25"
        //   }
        ],
        
        selectedNoteIndex: null,
        editorNoteTitle: "",
        editorNoteBody: "",
      }
    }
  
    // editButtonHandler = (noteIndex) => {
    //   this.setState(prevState => ({
    //     ...prevState,
    //     selectedNoteIndex: noteIndex,
    //     editorNoteTitle: this.state.notecardData[noteIndex].noteTitle,
    //     editorNoteBody: this.state.notecardData[noteIndex].noteBody
    //   }))
    // };
  
    // submitNote = () => {
    //   if (this.state.selectedNoteIndex != null) {
    //     let newNotecardData = this.state.notecardData
    //     newNotecardData[this.state.selectedNoteIndex].noteTitle = this.state.editorNoteTitle;
    //     newNotecardData[this.state.selectedNoteIndex].noteBody = this.state.editorNoteBody;
    //     this.setState(prevState => ({
    //       ...prevState,
    //       notecardData: newNotecardData,
    //       editorNoteTitle: "",
    //       editorNoteBody: "",
    //       selectedNoteIndex: null
    //     }))
    //   }
    // }
  
    // handleTitleChange = (event) => {
    //   const newTitle = event.target.value;
    //   this.setState(prevState => ({
    //     ...prevState,
    //     editorNoteTitle: newTitle
    //   }))
    // };
  
    // handleBodyChange = (event) => {
    //   const newBody = event.target.value;
    //   this.setState(prevState => ({
    //     ...prevState,
    //     editorNoteBody: newBody
    //   }))
    // }
  
    render() {
      return (
          <div className="App">
          <div id="container">
            <div class = "header_stuff">
              <HeaderChunk/>
            </div>
            {/* <header>
              <img id="logo-img" src="assets/pen-to-square-solid.svg" />
              <h1> PUI-NOTE </h1>
            </header> */}
            <div class = "section" id = "products_page">
            <div id="notecard-list"> 
              <RollCard
                cardIndex={0}
                roll_img_src={this.state.notecardData[0].roll_img_src}
                roll_img_alt={this.state.notecardData[0].roll_img_alt}
                roll_figcaption={this.state.notecardData[0].roll_figcaption}
                roll_price={this.state.notecardData[0].roll_price}/>

              <RollCard
                cardIndex={1}
                roll_img_src={this.state.notecardData[1].roll_img_src}
                roll_img_alt={this.state.notecardData[1].roll_img_alt}
                roll_figcaption={this.state.notecardData[1].roll_figcaption}
                roll_price={this.state.notecardData[1].roll_price}/>
              <RollCard
                cardIndex={2}
                roll_img_src={this.state.notecardData[2].roll_img_src}
                roll_img_alt={this.state.notecardData[2].roll_img_alt}
                roll_figcaption={this.state.notecardData[2].roll_figcaption}
                roll_price={this.state.notecardData[2].roll_price}/>
            </div>
            <div id="notecard-list"> 
              <RollCard
                  cardIndex={3}
                  roll_img_src={this.state.notecardData[3].roll_img_src}
                  roll_img_alt={this.state.notecardData[3].roll_img_alt}
                  roll_figcaption={this.state.notecardData[3].roll_figcaption}
                  roll_price={this.state.notecardData[3].roll_price}/>
                <RollCard
                  cardIndex={4}
                  roll_img_src={this.state.notecardData[4].roll_img_src}
                  roll_img_alt={this.state.notecardData[4].roll_img_alt}
                  roll_figcaption={this.state.notecardData[4].roll_figcaption}
                  roll_price={this.state.notecardData[4].roll_price}/>
                <RollCard
                  cardIndex={5}
                  roll_img_src={this.state.notecardData[5].roll_img_src}
                  roll_img_alt={this.state.notecardData[5].roll_img_alt}
                  roll_figcaption={this.state.notecardData[5].roll_figcaption}
                  roll_price={this.state.notecardData[5].roll_price}/>

            </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default App;
