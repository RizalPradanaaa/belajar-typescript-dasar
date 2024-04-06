describe("Array", () => {
  // Tipe Data Array
  it("should be same with javascript", () => {
    const names: string[] = ["Rizal", "Nawang", "Pradana"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  //   Read Only Array
  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Coding"];
    console.log(hobbies[0]);
    console.log(hobbies[1]);

    // hobbies[0] = "Gaming";
  });

  //   Tuple
  it("should support tupple", () => {
    const person: readonly [string, string, number] = ["Rizal", "Pradana", 22];
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
