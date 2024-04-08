describe("Function in typescript", () => {
  it("should support function in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }
    expect(sayHello("Rizal")).toBe("Hello Rizal");

    function printName(name: string): void {
      console.info(name);
    }
    printName("Boy");
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    expect(sayHello("Rizal")).toBe("Hello Rizal");
    expect(sayHello()).toBe("Hello Guest");
  });

  it("should support rest paramater", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
  it("should support function overloading", () => {
    function Callme(value: number): number;
    function Callme(value: string): string;
    function Callme(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(Callme("rizal")).toBe("RIZAL");
    expect(Callme(10)).toBe(100);
  });

  it("should support function as paramater", () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }
    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Rizal", toUpper)).toBe("Hello RIZAL");

    // Anonymous function
    expect(
      sayHello("Rizal", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello RIZAL");

    // Arrow function
    expect(
      sayHello("Rizal", (name: string): string => name.toUpperCase())
    ).toBe("Hello RIZAL");
  });
});
