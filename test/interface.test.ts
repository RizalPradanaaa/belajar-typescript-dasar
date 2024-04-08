import { Seller } from "../src/seller";
import { Employee, Manajer } from "../src/employee";
import { Person } from "../src/person";
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

  it("should support interface extends", () => {
    const employe: Employee = {
      id: 1,
      name: "Rizal",
      division: "IT",
    };

    console.info(employe);

    const manajer: Manajer = {
      id: 1,
      name: "Pradana",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(manajer);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Rizal",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    expect(person.sayHello("Boy")).toBe("Hello Boy, my name is Rizal");
  });

  it("should support intersection type", () => {
    interface HasId {
      id: number;
    }
    interface HasName {
      name: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: 1,
      name: "Rizal",
    };
    console.info(domain);
  });
});
