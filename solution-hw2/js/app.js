// NOTE: for the purpose of this assignment, 
// I used quantity and pack size interchangeably

// NOTE 2: to shorten line length in some cases, I split lines
// I prefer when lines are split to have the related stuff right under where it
// was in previous lines, which is commonly done in other programming languages
// because we were not given specific instructions either way, 
// I did the way I prefer
// Ex:
// function(long_param_1, long_param_2, long_param_3, long_param_4, 
//          long_param_5)
// as opposed to:
// function(long_param_1, long_param_2, long_param_3, long_param_4, 
//   long_param_5)
// Just wanted to make it clear that the extra idnentation was an intentional
// style choice that I think makes it easier to read

// Throughout my coding process, I was really struggling understanding how I
// could attach specific objects that I wanted to manipulate (the types of rolls)
// to the specific buttons or product cards being pressed. 
// This tutorial (different project with different functionality 
// but a good example in the same realm) helped me finally understand that I 
// could use ids in the way I did to attach my roll objects to the 
// interactive parts of my website. Particularly watched from 1:04:18 to 1:11:20
// and that really helped the concepts click in my brain. 
// I started using ids with a somewhat similar implementation to them, and then 
// I used what I had learned from them walking through it to change it to be 
// applicable to my website. I did not directly copy from this tutorial, nor did
// i even watch much more than the short clip I cited above, but rather used it 
// as a tool to better understand javascript logic, similar to how I've been 
// using the labs to learn.
// https://www.freecodecamp.org/news/code-a-shopping-cart-with-javascript/
// https://www.youtube.com/watch?v=cT_ZYrS3tKc

// Creating class for storing roll info
class Roll {

  // Constructor to make an instance of this class with certain values
  constructor(type, price, glazing, packSize, elementID) {
    this.rolltype = type;
    this.rollprice = price;
    this.rollglazing = glazing;
    this.rollpackSize = packSize;
    this.rollelementID = elementID;
  }
    
}

// Creating object literals for glaze types

const keepOriginal = {
  // Setting name for this glaze
  name: "Keep original",
  // Setting price adjustment value for this glaze
  value: 0.00
};

const sugarMilk = {
  name: "Sugar milk",
  value: 0.00
};

const vanillaMilk = {
  name: "Vanilla milk",
  value: 0.50
};

const doubleChocolate = {
  name: "Double chocolate",
  value: 1.50
};

// Adding glaze objects to an array for later use
const glazes = [keepOriginal, sugarMilk, vanillaMilk, doubleChocolate];


// Creating object literals for quantities / pack sizes 
    
const quantity1 = {
  // Setting name for this quantity
  name: "1",
  // Setting price adjustment value for this quantity
  value: 1
};

const quantity3 = {
  name: "3",
  value: 3
};

const quantity6 = {
  name: "6",
  value: 5
};

const quantity12 = {
  name: "12",
  value: 10
};

// Adding quantity / pack size objects to an array for later use
const quantities = [quantity1, quantity3, quantity6, quantity12];


// code creating roll objects for each of our roll types using the class I made

// default roll objects (to reference)
original_roll_base = new Roll("Original", 2.49, keepOriginal, quantity1, "original_base");
apple_roll_base = new Roll("Apple", 3.49, keepOriginal, quantity1, "apple_base");
raisin_roll_base = new Roll("Raisin", 2.99, keepOriginal, quantity1, "raisin_base");
walnut_roll_base = new Roll("Walnut", 3.49, keepOriginal, quantity1, "walnut_base");
doublechocolate_roll_base = new Roll("Double-chocolate", 3.99, keepOriginal, quantity1, "doublechocolate_base");
strawberry_roll_base = new Roll("Strawberry", 3.99, keepOriginal, quantity1, "strawberry_base");

// Creating an array storing this group of base roll objects
base_rolls = [original_roll_base, apple_roll_base, raisin_roll_base, 
              walnut_roll_base, doublechocolate_roll_base, 
              strawberry_roll_base];

// roll objects to change / update
original_roll = new Roll("Original", 2.49, keepOriginal, quantity1, "original");
apple_roll = new Roll("Apple", 3.49, keepOriginal, quantity1, "apple");
raisin_roll = new Roll("Raisin", 2.99, keepOriginal, quantity1, "raisin");
walnut_roll = new Roll("Walnut", 3.49, keepOriginal, quantity1, "walnut");
doublechocolate_roll = new Roll("Double-chocolate", 3.99, keepOriginal, quantity1, "doublechocolate");
strawberry_roll = new Roll("Strawberry", 3.99, keepOriginal, quantity1, "strawberry");

// Creating an array storing this group of roll objects to be updated
rolls = [original_roll, apple_roll, raisin_roll, walnut_roll,
        doublechocolate_roll, strawberry_roll];


// Code to populate dropdown for each product card from glaze list
// Used this reference for populating dropdown
// https://stackoverflow.com/questions/65502247/how-to-load-dropdown-menu-from-obj

//  gets all html elements with class "glaze_select"
let glazeSelects = document.querySelectorAll(".glaze_select");

// loops through each selector (selector for each type of cinnamon roll)
for (let single_selector of glazeSelects){

  // loops through each type of glaze
  for (let item of glazes) {

    // creates option element for each type of glaze
    let opt = document.createElement('option');
    // adds text content to each option from glaze object name
    opt.textContent = item.name;
    // adds a value to each option from glaze object value
    opt.value = item.value;
    // adds option we created to the selector we are currently on in our loop
    single_selector.append(opt);
  }
}

// Code to populate radio buttons for each product card from quantities list
// Got help with this from TA Seyun in office hours

// looping through each quantity from our quantities list
for (let item of quantities){
  
  // selecting corresponding radio buttons according to quantity
  let iterative_pack_option = document.querySelectorAll(`.radio-${item.name}`);
  
  // looping through radio buttons with a certain quanity
  for (let radio_button_of_quantity of iterative_pack_option) {
    
    // adds text content to each button from quantity object name
    radio_button_of_quantity.innerHTML = item.name;
    // adds price adjustment value to each button from quantity object value
    radio_button_of_quantity.value = item.value;
  }

}

// Helper function to calculate price based on type, glaze, and quantity
function priceCalculator (base_price, glaze_price_adjust, quantity_price_adjust) {

  // calculation: (base price + glaze price adjustment) * quantity price adjustment
  // Used this as reference for parse float
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  // Used these as reference for toFixed
  // https://www.w3schools.com/jsref/jsref_tofixed.asp
  // https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  let new_price = ((parseFloat(base_price) + parseFloat(glaze_price_adjust)) * parseFloat(quantity_price_adjust)).toFixed(2);

  // returning calculated price
  return new_price;

}

// Function that handles changes associated with glazing options
function glazingChange(element) {
  // Gets id of particular selector (to tell which roll to update)
  let id = element.id;

  // Finds roll with matching id to selector
  // Used this as reference for the find method with arrays
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  let roll_to_change = rolls.find((roll_object) => roll_object.rollelementID == id);

  // Gets text content of option to associate it with glaze object in our array
  // Used this to help understand how to get text content of selected option
  // https://stackoverflow.com/questions/610336/retrieving-the-text-of-the-selected-option-in-select-element
  let glazingchoice = glazes.find((glaze_object) => glaze_object.name == element.options[element.selectedIndex].textContent);

  // Updates the glazing value of roll object associated with this selector
  roll_to_change.rollglazing = glazingchoice;
  
  // Getting needed values for price calculation

  // getting price adjustment due to glaze from selected option
  const glaze_price_change = element.value;

  // getting the price adjustment due to current quantity we have selected
  const current_quantity_price_change = roll_to_change.rollpackSize.value;

  // getting base roll price for this type
  let base_roll = base_rolls.find((base_roll_object) => base_roll_object.rollelementID == `${id}_base`);
  const base_price = base_roll.rollprice;

  // using helper function to calculate updated price
  let new_price = priceCalculator(base_price, glaze_price_change, 
                                  current_quantity_price_change);

  // update price on client-facing page
  document.getElementById(`${id}_price_text_number`).textContent = new_price;

  // updating price for roll we are currently working with
  roll_to_change.rollprice = new_price;

}

// Function that handles changes associated with quantity options
function quantityChange(element) {

  // Gets id of particular radio button(to tell which roll to update)
  let id = element.id;

  // Finds roll with matching id to selector
  let roll_to_change = rolls.find((roll_object) => roll_object.rollelementID == id);

  // Gets value of quantity option to associate it with glaze object in our array
  let quantity_choice = quantities.find((quantity_object) => quantity_object.value == element.value);

  // Updates the packSize value of roll object associated with this selector
  roll_to_change.rollpackSize = quantity_choice;

  // Getting needed values for price calculation

  // getting price adjustment due to quantity from selected option
  const quantity_price_change = element.value;

  // getting the price adjustment due to current glaze we have selected
  const current_glazing_price_change = roll_to_change.rollglazing.value;

  // getting base roll price for this type
  let base_roll = base_rolls.find((base_roll_object) => base_roll_object.rollelementID == `${id}_base`);
  const base_price = base_roll.rollprice;

  // using helper function to calculate updated price
  let new_price = priceCalculator(base_price, current_glazing_price_change, quantity_price_change);

  // update price on client-facing page
  document.getElementById(`${id}_price_text_number`).textContent = new_price;

  // updating price for roll we are currently working with
  roll_to_change.rollprice = new_price;
      
}

// Code for cart

// Creating an array to store rolls once we add them to cart
let cart = [];

// helper function for our cart pop up
function removeVisibility (element){
  // removing class that makes cart pop up visible
  element.classList.remove('cart_pop_up_visibility_visible')
}

// function that handles adding rolls to cart when add to cart button is pushed
function addtoCart(element) {

  // Gets id of particular add to cart button (to tell which roll to update)
  let id = element.id;

  // Finds roll with matching id to button
  let roll_to_add = rolls.find((roll_object) => roll_object.rollelementID == id);

  // Makes (functionally) a copy of the roll we want to add
  // In reality I make a new roll object and fill it with the values of our 
  // current roll so that we can preserve those values when we reset the roll
  // object we want to update, we don't change what's in cart
  const cart_roll = new Roll(roll_to_add.rolltype, roll_to_add.rollprice, 
                            roll_to_add.rollglazing, roll_to_add.rollpackSize, 
                            `${roll_to_add.elementID}_added`)
  
  // Adding new roll to cart
  // Used this for reference for adding to array
  // https://www.w3schools.com/jsref/jsref_push.asp
  cart.push(cart_roll);
  
  // Items in cart

  // Calculating items in cart
  // Items is like default
  let item_text = "items";
  // However if there is only 1 item
  if (cart.length == 1){
    // We should switch the text to to singular "item"
    item_text = "item"
  };
  // Updating items in cart to be displayed
  document.querySelector(`.cart-items-text`).textContent = `${cart.length} ${item_text}`;

  // Total value of items in cart

  // Calculating cart value
  let cart_value = 0.00
  // Using a for loop to each item in cart
  for (let added_item of cart){
    // Accumulating price of each item as we loop through them
    cart_value = (parseFloat(cart_value) + parseFloat(added_item.rollprice)).toFixed(2);
  }
  // Updating value of cart to be displayed
  document.querySelector(`.cart-total-text`).textContent = `Total: $${cart_value}`;

  // Filling in info for our pop up
  document.querySelector(`.cart-pop_up-type`).textContent = `${cart_roll.rolltype} cinammon roll`;
  document.querySelector(`.cart-pop_up-glaze`).textContent = `${cart_roll.rollglazing.name}`;
  document.querySelector(`.cart-pop_up-pack`).textContent = `Pack of ${cart_roll.rollpackSize.name}`;
  document.querySelector(`.cart-pop_up-price`).textContent = `Price $${cart_roll.rollprice}`;

  // Get pop up element from our HTML
  // It is already there but not visible
  // TA Seyun and Adrian (classmate) inspired me to set up my pop up so that 
  // it's always there, but it is not always visible
  let pop_up = document.getElementById("cartpopUp");

  // Add class that changes the visibility of the pop up
  // Used this for reference for adding and removing classes
  // https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
  pop_up.classList.add('cart_pop_up_visibility_visible')

  // Waits 3 seconds, then removes the class that makes the pop up visible
  // Used this for reference for Timeout
  // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
  setTimeout(removeVisibility, 5000, pop_up)

  // resetting roll so that 
   // Finds base roll of the type of our current roll
  //  let roll_to_add_base = base_rolls.find((roll_object) => roll_object.rollelementID == `${id}_base`);

  //  roll_to_add.rollprice = roll_to_add_base.rollprice;
  //  this.rollglazing = keepOriginal;
  //  this.rollpackSize = quantity1;

  // reset roll by chnaging roll that was added to based roll

}