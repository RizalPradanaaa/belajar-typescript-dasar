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
});
