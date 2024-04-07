import { Seller } from "../src/seller";
describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Rizal",
      nib: 123,
      npwp: 11111,
    };

    seller.name = "Rizal Pradana";
    // seller.npwp = 1111;  // cannot because read-only
    console.info(seller);
  });
});
