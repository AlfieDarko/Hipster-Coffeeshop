import { Selector } from "testcafe";
fixture`Front End Tests`.page`http://localhost:3000/`;
test("Displays cost after addng to cart", async t => {
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
    .expect(Selector("#total-text-area").value)
    .eql("4.75");
});
