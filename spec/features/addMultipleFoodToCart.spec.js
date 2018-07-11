import { Selector } from "testcafe";
fixture`Front End Tests`.page`http://localhost:3000/`;
test("Can add multiple items to the cart", async t => {
  let itemSelect = Selector("#items-in-dropdown");
  let itemOption = itemSelect.find("option");
  let cartSelect = Selector("#cart-with-items");
  let addToCartButton = Selector("#add-to-cart-button");
  let cartOption = cartSelect.find("option");
  await t
    .click(itemSelect)
    .click(itemOption.withText("Cafe Latte"))
    .click(addToCartButton)
    .click(itemSelect)
    .click(itemOption.withText("Double Espresso"))
    .click(addToCartButton)
    .wait(1000)
    .click(cartOption.withText("Double Espresso"))
    .expect(cartSelect.value)
    .eql("Double Espresso");
});
