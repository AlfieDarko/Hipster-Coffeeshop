class Buttons {
  constructor(till) {
    this.till = till;
  }

  addName(name) {
    this.till.setCustomerName(name);
    console.log(name);
    // this.display.disableNameInput()
  }

  addToCart() {
    let items = [];
    $("#items-in-dropdown option:selected").each(function(
      indexOfItem,
      selectedItem
    ) {
      items.push($(selectedItem).val());
    });
    this.till.order.setBasket(items);

    this.till.getBasket().forEach(function(item) {
      let option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      document.getElementById("cart-with-items").appendChild(option);
    });
  }
}

export default Buttons;
