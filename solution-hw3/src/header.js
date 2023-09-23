import React, { Component } from 'react';
import './index.css';

class HeaderChunk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };    
  }

  render() {
    return (
        <div class = "header">

      <div class = "logo">
        <img src= "assets/logo/logo-01.svg" width = "400" alt = "Bun Bun bakeshop logo" />
      </div>

      <div class = "header-right">

          <div class = "header-nav">
            <div class = "product">
            <a href="#products_page" class = "product_link">PRODUCTS</a>
            </div>
            <div class = "cart">
              CART
            </div>
          </div>

          <hr class="horizontal_line" />
          {/* Used this link for help with line styling 
          https://www.w3schools.com/howto/howto_css_style_hr.asp/ */}

          <div class = "slogan_box">
            <div class = "slogan">
              Our hand-made cinnamon rolls
            </div>
          </div>

      </div>

    </div>

    );
  }
//   render() {
//     return (
//       <div className="notecard expanded">         
//         <div className="notecard-left">
//           <div className="notecard-main-content">
//             <img className="notecard-thumbnail" src={this.props.imageURL}/>
//             <div className="notecard-text">
//               <div className="note-title-container">
//                 <div className="note-title">
//                   {this.props.noteTitle}
//                 </div>
//               </div>
//               <div className="note-body">
//                 {this.props.noteBody}
//               </div>
//             </div>
//           </div>
//           <div className="notecard-footer">
//             {this.props.noteFooter}
//           </div>
//         </div>
//         <div className="notecard-right">
//           <div className="icon icon-expand material-symbols-outlined">
//             expand_more
//           </div>
//           <div className="icon icon-collapse material-symbols-outlined">
//             expand_less
//           </div>
//           <div className="toolbar">
//             <div className="material-symbols-outlined icon icon-edit" onClick={() => this.props.onEdit(this.props.noteIndex)}>
//               edit
//             </div>
//             <div className="material-symbols-outlined icon icon-delete">
//               delete
//             </div>
//           </div>
//         </div> 
//       </div>
//     );
//   }
}

export default HeaderChunk;