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

  it("should support function interface", () => {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(1, 3)).toBe(4);
  });
});
