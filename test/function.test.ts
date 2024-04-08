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
});
