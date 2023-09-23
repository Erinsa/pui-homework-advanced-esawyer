import React, { Component } from 'react';
import './index.css';

class RollCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };    
  }

  render() {
    return (
        <article class = "roll_card">

            <div> 
            <figure>
                <img class = "product_image" src= {this.props.roll_img_src} width = "200" alt = {this.props.roll_img_alt} />
                <figcaption>{this.props.roll_figcaption}</figcaption>
            </figure>
            </div>

            <div class = "outer">

                <div class = "row">
                    <div class = "item text">
                    <p>Glazing:</p>
                    </div>
                    <div class = "item option">
                    <select class = "glaze_select">
                        <option value="0">Keep original</option>
                        <option value="1">Sugar milk</option>
                        <option value="2">Vanilla milk</option>
                        <option value="3">Double chocolate</option>
                    </select>
                    </div>
                </div>

                <div class = "row">
                    <div class = "item text">
                    <p>Pack size:</p>
                    </div>
                    <div class = "item option">

                    <div class = "quantity_button_container">
                        <label class="quantity_buttons">
                        {/*Used this to help troubleshoot glicth due to using checked as an attribute
                         https://stackoverflow.com/questions/48423061/radio-buttons-need-to-click-twice-to-reflect-change */}
                        <input type="radio" name= {`radio_${this.props.cardIndex}`} defaultChecked = "checked" />
                        <span class="new_quantity_button">1</span>
                        </label>

                        <label class="quantity_buttons">
                        <input type="radio" name= {`radio_${this.props.cardIndex}`}/>
                        <span class="new_quantity_button">3</span>
                        </label>

                        <label class="quantity_buttons">
                        <input type="radio" name= {`radio_${this.props.cardIndex}`} />
                        <span class="new_quantity_button">6</span>
                        </label>

                        <label class="quantity_buttons">
                        <input type="radio" name= {`radio_${this.props.cardIndex}`} />
                        <span class="new_quantity_button">12</span>
                        </label>

                    </div>
                    </div>
                </div>

                <div class = "row">
                    <div class = "item text">
                    <div class = "price_text">
                    <p>{`$ ${this.props.roll_price}`}</p>
                    </div>
                    </div>
                    <div class = "item option">
                    <button class = "cart_button">Add to cart</button>
                    </div>
                </div>
                </div>
            
      </article>

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

export default RollCard;