class Roll {
    constructor(type, price, glazing, packSize, elementID) {
      this.rolltype = type;
      this.rollprice = price;
      this.rollglazing = glazing;
      this.rollpackSize = packSize;
      this.rollelementID = elementID;

    
  
      // this.element = document.querySelector(elementID);

    }


    //   const btnExpand = this.element.querySelector('.icon-expand');
    //   const btnCollapse = this.element.querySelector('.icon-collapse');
  
    //   btnExpand.onclick = this.expandNote.bind(this);
    //   btnCollapse.onclick = this.collapseNote.bind(this);
  
    //   const btnEdit = this.element.querySelector('.icon-edit');
    //   btnEdit.onclick = this.editNote.bind(this);
  
    //   const btnDelete = this.element.querySelector('.icon-delete');
    //       btnDelete.onclick = this.deleteNote.bind(this);
  
    //   this.updateElement();
    //  } 
    
    }

    const keepOriginal = {
      name: "Keep original",
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

    const glazes = [keepOriginal, sugarMilk, vanillaMilk, doubleChocolate];

    const quantity1 = {
      name: "1",
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

    const quantities = [quantity1, quantity3, quantity6, quantity12];

    // Used this reference for populating dropdown
    // https://stackoverflow.com/questions/65502247/how-to-load-dropdown-menu-from-obj

    let glazeSelects = document.querySelectorAll(".glaze_select");
    
    for (let single_selector of glazeSelects){
      for (let item of glazes) {
        let opt = document.createElement('option');
          
        opt.textContent = item.name;
        opt.value = item.value;
        // console.log(opt.textContent, opt.value);
          
        single_selector.append(opt);
      }
    }

    // for (let item of glazes) {
    //   let opt = document.createElement('option');
        
    //   opt.textContent = item.name;
    //   opt.value = item.value;
    //   // console.log(opt.textContent, opt.value);
        
    //   glazeSelect.append(opt);
    // }

    // let packSelect = document.querySelector("#packOptions");
    
    for (let item of quantities){
      // console.log ("item in quantities", item);
      let iterative_pack_option = document.querySelectorAll(`.radio-${item.name}`);
      // console.log("hello" + iterative_pack_option);
      for (let list_item of iterative_pack_option){
        // console.log("this is " + list_item);
        list_item.innerHTML = item.name;
        list_item.value = item.value;
      }
      // console.log("this is " + iterative_pack_option);
      // iterative_pack_option.innerHTML = item.name;
      // iterative_pack_option.value = item.value;
      // console.log(iterative_pack_option.textContent, iterative_pack_option.value);
    }

    // for (let item of quantities) {
    //   let opt = document.createElement('option');
        
    //   opt.textContent = item.name;
    //   opt.value = item.value;
    //   // console.log(opt.textContent, opt.value);
        
    //   packSelect.append(opt);
    // }

    // function glazingChange(element) {
    //   // get value of selected glazing option
    //   const priceChange = element.value;
    //   console.log("value" + element.value)

    //   let base_price = document.querySelector(`.price_text`).textContent;

    //   console.log("base_price" + base_price)
    //   console.log(parseFloat(base_price.replace(/\$/, '')))

    //   let new_price = parseFloat(base_price.replace(/\$/, '')) + parseInt(priceChange);

    //   document.querySelector(`.price_text`).textContent = new_price;

    //   // base_price.textContent = new_price;



      
    // // add your code to do update the price ...
    // }

    original_roll_base = new Roll("Original", 2.49, keepOriginal, quantity1, "original_base");
    apple_roll_base = new Roll("apple", 3.49, keepOriginal, quantity1);
    raisin_roll_base = new Roll("raisin", 2.99, keepOriginal, quantity1);
    walnut_roll_base = new Roll("walnut", 3.49, keepOriginal, quantity1);
    doublechocolate_roll_base = new Roll("double-chocolate", 3.99, keepOriginal, quantity1);
    strawberry_roll_base = new Roll("strawberry", 3.99, keepOriginal, quantity1);

    original_roll = new Roll("Original", 2.49, keepOriginal, quantity1, "original");
    apple_roll = new Roll("apple", 3.49, keepOriginal, quantity1);
    raisin_roll = new Roll("raisin", 2.99, keepOriginal, quantity1);
    walnut_roll = new Roll("walnut", 3.49, keepOriginal, quantity1);
    doublechocolate_roll = new Roll("double-chocolate", 3.99, keepOriginal, quantity1);
    strawberry_roll = new Roll("strawberry", 3.99, keepOriginal, quantity1);

// function glazingChange(element) {
//   console.log("id" + element.id)
//       // get value of selected glazing option
//   const priceChange = element.value;
//   // console.log("value" + element.value)
//   let base_price = 0.00;
//   if (element.parentElement.parentElement.parentElement.parentElement.id == "roll-original"){
//     base_price = original_roll.price
//   }
//   console.log(element.parentElement.parentElement.parentElement.parentElement.id)
//   console.log(element.siblingElement)


//   // console.log(document.querySelector(`article`))

//   // let base_price = document.querySelector(`.price_text_number`).textContent;

//   console.log("base_price" + base_price)
//   console.log(parseFloat(base_price))

//   let new_price = parseFloat(base_price) + parseFloat(priceChange);
//   console.log("new", new_price)

//   document.querySelector(`.price_text_number`).value = new_price;
//   document.querySelector(`.price_text_number`).textContent = new_price;

//   // base_price.textContent = new_price;



      
//     // add your code to do update the price ...
//   }

rolls = [
  original_roll,
  apple_roll,
  raisin_roll,
  walnut_roll,
  doublechocolate_roll,
  strawberry_roll
];

base_rolls = [
  original_roll_base,
  apple_roll_base,
  raisin_roll_base,
  walnut_roll_base,
  doublechocolate_roll_base,
  strawberry_roll_base
];

// let cart = [{

// }]

function glazingChange(element) {
  // console.log(rolls[0]);
  let id = element.id;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  let roll_to_change = rolls.find((roll_object) => roll_object.rollelementID == id);
  console.log(roll_to_change);
  console.log("element", element, element.options);

  // Used this to help understand how to get text content of selected option
  // https://stackoverflow.com/questions/610336/retrieving-the-text-of-the-selected-option-in-select-element
  let glazingchoice = glazes.find((glaze_object) => glaze_object.name == element.options[element.selectedIndex].textContent);
  console.log("choice",glazingchoice);
  roll_to_change.rollglazing = glazingchoice;
  console.log("changed", roll_to_change);

  // let selecteditem = id;
  // console.log(selecteditem.id)
  // console.log("id" + id)
  // console.log("element" + element)
      // get value of selected glazing option
  const priceChange = element.value;
  console.log("value" + element.value)

  const current_quantity_price_adjust = roll_to_change.rollpackSize.value;
  // let base_price = 0.00;
  // if (element.parentElement.parentElement.parentElement.parentElement.id == "roll-original"){
  //   let roll
  // }
  // console.log(element.parentElement.parentElement.parentElement.parentElement.id)
  // console.log(element.siblingElement)


  // console.log(document.querySelector(`article`))
  let base_roll = base_rolls.find((base_roll_object) => base_roll_object.rollelementID == `${id}_base`);
  console.log(base_roll);
  const base_price = base_roll.rollprice;
  // let base_price = document.querySelector(`.price_text_number`).textContent;

  console.log("base_price" + base_price)
  // console.log(parseFloat(base_price))

  let new_price = ((parseFloat(base_price) + parseFloat(priceChange)) * parseFloat(current_quantity_price_adjust)).toFixed(2);
  console.log("new", new_price)

  

  // document.querySelector(`.price_text_number`).value = new_price;
  document.querySelector(`.price_text_number`).textContent = new_price;

  // base_price.textContent = new_price;

  roll_to_change.rollprice = new_price;

  console.log(original_roll.rollprice)

      
    // add your code to do update the price ...
  }

function quantityChange(element) {
  let id = element.id;
  // console.log("id",new_id);
  let roll_to_change = rolls.find((roll_object) => roll_object.rollelementID == id);
  console.log(roll_to_change);

  let quantitychoice = quantities.find((quantity_object) => quantity_object.value == element.value);
  console.log("choice",quantitychoice);
  roll_to_change.rollpackSize = quantitychoice;
  // console.log("value" + element.value)
  console.log(original_roll);

  let base_roll = base_rolls.find((base_roll_object) => base_roll_object.rollelementID == `${id}_base`);
  console.log(base_roll);
  const base_price = base_roll.rollprice;

  const current_glazing_price_adjust = roll_to_change.rollglazing.value;
  const quantity_price_change = element.value;

  // let current_price = roll_to_change.rollprice;

  // let base_price = document.querySelector(`.price_text_number`).value;

  // console.log("base_price" + base_price)
  // console.log(parseFloat(base_price))

  const new_price = ((parseFloat(base_price) + parseFloat(current_glazing_price_adjust)) * parseFloat(quantity_price_change)).toFixed(2);
  console.log("new", new_price)

  // let new_price = parseFloat(current_price) * parseFloat(priceChange);
  // console.log("new", new_price)

  document.querySelector(`.price_text_number`).textContent = new_price;

  // https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  // base_price.textContent = (new_price.toFixed(3));


  roll_to_change.rollprice = new_price;
      
    // add your code to do update the price ...
}

let cart = [];

function removeVisibility (element){
  element.classList.remove('cart_pop_up_visibility_visible')
}

function addtoCart(element) {
  let id = element.id;

  console.log("ref1", element, id);
  let roll_to_add = rolls.find((roll_object) => roll_object.rollelementID == id);
  let roll_to_add_base = base_rolls.find((roll_object) => roll_object.rollelementID == `${id}_base`);
  console.log("ref",roll_to_add);
  console.log("ref2", roll_to_add_base);

  const cart_roll = new Roll(roll_to_add.rolltype, roll_to_add.rollprice, roll_to_add.rollglazing, roll_to_add.rollpackSize, `${roll_to_add.elementID}_added`)
  // Used this for reference for adding to array
  // https://www.w3schools.com/jsref/jsref_push.asp
  cart.push(cart_roll);
  console.log("cart",cart);

  document.querySelector(`.cart-pop_up-type`).textContent = `${cart_roll.rolltype}`;
  document.querySelector(`.cart-pop_up-glaze`).textContent = `${cart_roll.rollglazing.name}`;
  document.querySelector(`.cart-pop_up-pack`).textContent = `Pack of ${cart_roll.rollpackSize.name}`;
  document.querySelector(`.cart-pop_up-price`).textContent = `Price $${cart_roll.rollprice}`;


  roll_to_add.rollprice = roll_to_add_base.rollprice;
  this.rollglazing = keepOriginal;
  this.rollpackSize = quantity1;
  console.log("roll_to_add",roll_to_add);
  console.log("actualobject",original_roll);
  let item_text = "items";
  if (cart.length == 1){
    item_text = "item"
  };
  document.querySelector(`.cart-items-text`).textContent = `${cart.length} ${item_text}`;
  console.log("cart2",cart);
  let cart_value = 0.00
  for (let added_item of cart){
    cart_value = (parseFloat(cart_value) + parseFloat(added_item.rollprice)).toFixed(2);
  }
  document.querySelector(`.cart-total-text`).textContent = `Total: $${cart_value}`;

  console.log("cartval",cart_value);
  let popup = document.getElementById("cartpopUp");
  popup.classList.add('cart_pop_up_visibility_visible')
  console.log("pop",popup);
  setTimeout(removeVisibility, 3000, popup)


  // reset roll by chnaging roll that was added to based roll

}