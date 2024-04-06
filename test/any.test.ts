describe("Any", () => {
  it("should support in typescript", () => {
    const person: any = {
      id: 1,
      name: "Rizal",
      age: 22,
    };

    person.age = 17;
    console.info(person);
  });
});
