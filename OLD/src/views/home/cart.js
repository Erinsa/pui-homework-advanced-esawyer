// Used lab activity (notecard) for reference

import React, { Component } from 'react';
import { useState } from "react";
import CartRoll from './cartroll.js';
// import './cartroll.css';

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // cartrollData: JSON.parse(localStorage.getItem("cartrollData")) || []
        // cartRollData: JSON.parse(localStorage.getItem("cartRollData")) || [],
    };   
  }

  componentDidMount() {
    console.log("hello", this.state.cartRollData);
    localStorage.setItem("cartRollData", JSON.stringify(this.state.cartRollData));
  };

  componentDidUpdate() {
    // localStorage.setItem("cartRollData", JSON.stringify(this.state.cartRollData));
    // console.log("cart", this.state.cartrollData)
    // if 
    console.log("cart new", JSON.parse(localStorage.getItem("cartRollData")))
  };

      // This function handles removing rolls from the cart via the remove button on the cart roll cards, and updating associated values
      removeButtonHandler = (rollIndex) => {
        const newCartRollData = this.state.cartRollData;
        // let newCartRollData = JSON.parse(localStorage.getItem("cartrollData"))
        // let newTotalPrice = this.state.totalPrice;
        // newTotalPrice = (parseFloat(newTotalPrice) - parseFloat(newCartRollData[rollIndex].roll_price)).toFixed(2)
    
        newCartRollData.splice(rollIndex, 1);
    
        // let item_count = newCartRollData.length;
        // let itemText = "";
        // if (item_count == 1) {
        //   itemText = " item";
        // } else {
        //   itemText = " items";
        // }
    
        // console.log("cart remove", newCartRollData)
        // localStorage.setItem("cartrollData", JSON.stringify(newCartRollData));
    
        this.setState(prevState => ({
          ...prevState,
          // totalPrice: newTotalPrice,
          // totalItems: item_count,
          // totalItemsText: itemText,
          cartRollData: newCartRollData
        }))
      };

  render() {

    return (
      <div className = "overall_cart_holder">
      
        {(this.state.cartRollData.length == 0) &&
          <div className = "cart_empty_text">The cart is empty!</div>
        }

        {(this.state.cartRollData.length >= 1) &&
          <div className = "cart_shown_holder">

            <div className = "cart_shown_price_items_text_holder">

              <div className = "cart-items-text-shown">
                {`Shopping Cart (`+`${this.state.cartRollData.length}`+ `${this.state.cartRollData.length == 1 ? " item" : " items"}`+`)`}
              </div>

              <div className = "cart-total-text-shown">
                {"Total: "+ `${this.state.cartRollData.reduce((sum, num) => parseFloat(sum) + parseFloat(num.roll_price), 0).toFixed(2)}`}
              </div>

            </div>

            {this.state.cartRollData.map((cartroll, idx) => {
                return <CartRoll
                  key={idx}
                  rollIndex={idx}
                  roll_img_src={cartroll.roll_img_src}
                  roll_img_alt={cartroll.roll_img_alt}
                  roll_figcaption={cartroll.roll_figcaption}
                  roll_base_price={cartroll.roll_base_price}
                  roll_type={cartroll.roll_type}
                  roll_glazing={cartroll.roll_glazing}
                  roll_pack_size={cartroll.roll_pack_size}
                  roll_price= {this.props.priceCalculator(cartroll.roll_base_price, cartroll.roll_glazing, cartroll.roll_pack_size)}
                  // onRemove = {this.props.onRemove}
                  onRemove = {this.removeButtonHandler}
                />;
              })}
              </div>
        }

      </div>

    //   <div className = "overall_cart_holder">
    //   {console.log("cart roll check", JSON.parse(localStorage.getItem("cartrollData")))}
      
    // //   {(this.state.cartrollData.length == 0) &&
    //             <div className = "cart_empty_text">The cart is empty!</div>
    //           }

    //   {(this.state.cartrollData.length >= 1) &&

    //     <div className = "cart_shown_holder">


    //       <div className = "cart_shown_price_items_text_holder">

    //         <div className = "cart-items-text-shown">
    //           {/* {`Shopping Cart (`+`${this.state.totalItems}`+ `${this.state.totalItemsText}`+`)`} */}
    //           {/* {console.log("cart roll check", JSON.parse(localStorage.getItem("cartrollData")))}
    //           {`Shopping Cart (`+`${JSON.parse(localStorage.getItem("cartrollData")).length}`+ `${JSON.parse(localStorage.getItem("cartrollData")).length == 1 ? " item" : " items"}`+`)`} */}
    //           {`Shopping Cart (`+`${this.state.cartrollData.length}`+ `${this.state.cartrollData.length == 1 ? " item" : " items"}`+`)`}
    //           {/* "Work" ? "blue" : "green" */}
    //         </div>

    //         <div className = "cart-total-text-shown">
    //           {/* {"Total: "+ `${JSON.parse(localStorage.getItem("cartrollData")).reduce((sum, num) => parseFloat(sum) + parseFloat(num.roll_price), 0).toFixed(2)}`} */}
    //           {"Total: "+ `${this.state.cartrollData.reduce((sum, num) => parseFloat(sum) + parseFloat(num.roll_price), 0).toFixed(2)}`}
    //           {/* {"Total: "+ `${this.state.cartrollData.reduce((sum, num) => console.log("num", num) )}`} */}
    //         </div>

    //     </div>

    //     <div className = "cartcard-list"> 

    //     {/* {console.log("cart roll check", cartrollData)} */}

    //     {this.state.cartrollData.map((cartroll, idx) => {
    //       return <CartRoll
    //         key={idx}
    //         rollIndex={idx}
    //         roll_img_src={cartroll.roll_img_src}
    //         roll_img_alt={cartroll.roll_img_alt}
    //         roll_figcaption={cartroll.roll_figcaption}
    //         roll_base_price={cartroll.roll_base_price}
    //         roll_type={cartroll.roll_type}
    //         roll_glazing={cartroll.roll_glazing}
    //         roll_pack_size={cartroll.roll_pack_size}
    //         roll_price= {this.props.priceCalculator(cartroll.roll_base_price, cartroll.roll_glazing, cartroll.roll_pack_size)}
    //         onRemove = {this.props.onRemove}
    //         // onRemove = {this.removeButtonHandler}

    //       />;
    //     })}
    //   </div>
    // </div>}
    // </div>

    );
  }
}

export default Cart;