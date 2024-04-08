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

  it("should indexable interface", () => {
    interface stringArray {
      [index: number]: string;
    }
    const names: stringArray = ["Rizal", "Nawang", "Pradana"];
    console.info(names[0]);
    console.info(names[1]);
    console.info(names[2]);
  });

  it("should indexable interface non number index", () => {
    interface stringDictionary {
      [key: string]: string;
    }

    const dictionary: stringDictionary = {
      name: "Rizal",
      address: "Java",
    };

    console.info(dictionary["name"]);
    console.info(dictionary["address"]);
  });
});
