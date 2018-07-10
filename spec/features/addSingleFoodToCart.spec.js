import { Selector } from "testcafe";
fixture`Front End Tests`.page`http://localhost:3000/`;
test("Can add a single item to the cart", async t => {
  let itemSelect = Selector("#items-in-dropdown");
  let itemOption = itemSelect.find("option");
  let cartSelect = Selector("#cart-with-items");
  let addToCartButton = Selector("#add-to-cart-button");
  let cartOption = cartSelect.find("option");
  await t
    .click(itemSelect)
    .click(itemOption.withText("Cafe Latte"))
    .click(addToCartButton)
    .wait(1000)
    .click(cartOption.withText("Cafe Latte"))
    .expect(cartSelect.value)
    .eql("Cafe Latte");
});
