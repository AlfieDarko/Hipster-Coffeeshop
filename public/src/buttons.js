class Buttons {
  constructor(till) {
    this.till = till;
  }

  addName(name) {
    this.till.setCustomerName(name);
    console.log(name);
  }

  addToCart() {
    let items = [];
    $("#items-in-dropdown option:selected").each(function(
      indexOfItem,
      selectedItem
    ) {
      items.push($(selectedItem).val());
    });
    this.till.setBasket(items);
    this.displayCartItems();
    this.cartToBasket();
    this.displayTotal();

    items.length = 0;
  }

  displayCartItems() {
    this.till.getBasket().forEach(function(item) {
      let option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      document.getElementById("cart-with-items").appendChild(option);
    });
  }

  clearCart() {
    this.till.resetBasket();
    $("#cart-with-items")
      .find("option")
      .remove()
      .end();
    this.displayTotal();
  }

  cartToBasket() {
    let items = [];
    $("#cart-with-items option").each(function(indexOfItem, selectedItem) {
      console.log($(selectedItem).val());
      items.push($(selectedItem).val());
    });
    this.till.setBasket(items);
  }

  displayTotal() {
    let basket = this.till.getBasket();
    $("#total-text-area").val(this.till.getGrandTotal(basket));
  }
}

export default Buttons;
