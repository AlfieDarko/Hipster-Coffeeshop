import Order from "../public/src/order.js";
import { expect } from "chai";
describe("Order", () => {
  let order;
  describe(".setCustomerName()", () => {
    let order;
    beforeEach(() => {
      order = new Order();
    });

    it("sets the Customer Name of this order as James", () => {
      order.setCustomerName("James");
      expect(order.getCustomerName()).to.eql("James");
    });
  });
  describe(".getCustomerName()", () => {
    let order;
    beforeEach(() => {
      order = new Order();
    });

    it("gets the Customer Name as set by setCustomerName()", () => {
      order.setCustomerName("Anna");
      expect(order.getCustomerName()).to.eql("Anna");
    });
  });

  describe(".setBasket()", () => {
    beforeEach(() => {
      order = new Order();
    });

    it("sets basket with items", () => {
      order.setBasket(["Cafe Latte"]);
      expect(order.getBasket()).to.eql(["Cafe Latte"]);
    });
  });

  describe(".resetBasket()", () => {
    beforeEach(() => {
      order = new Order();
    });

    it("resets the basket back to an empty state", () => {
      order.setBasket(["Cafe Latte", "Flat White"]);
      order.resetBasket();
      expect(order.getBasket()).to.eql([]);
    });
  });

  describe(".resetCustomerName()", () => {
    beforeEach(() => {
      order = new Order();
    });
    it("resets the name property back to null", () => {
      order.resetCustomerName();
      expect(order.getCustomerName()).to.eql(null);
    });
  });
});
