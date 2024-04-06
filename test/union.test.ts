describe("Union Type", () => {
  it("should support in typescript", () => {
    let sample: string | number | boolean = "Eko";
    sample = 100;
    sample = true;

    console.info(sample);
  });
  it("should support typeof operator", () => {
    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("rizal")).toBe("RIZAL");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
