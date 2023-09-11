class Roll {
    constructor(type, price, glazing, packSize, elementID) {
      this.rolltype = type;
      this.rollprice = price;
      this.rollglazing = glazing;
      this.rollpackSize = packSize;
  
    //   this.element = document.querySelector(elementID);
  
    //   const btnExpand = this.element.querySelector('.icon-expand');
    //   const btnCollapse = this.element.querySelector('.icon-collapse');
  
    //   btnExpand.onclick = this.expandNote.bind(this);
    //   btnCollapse.onclick = this.collapseNote.bind(this);
  
    //   const btnEdit = this.element.querySelector('.icon-edit');
    //   btnEdit.onclick = this.editNote.bind(this);
  
    //   const btnDelete = this.element.querySelector('.icon-delete');
    //       btnDelete.onclick = this.deleteNote.bind(this);
  
      this.updateElement();
     } 
    
    }