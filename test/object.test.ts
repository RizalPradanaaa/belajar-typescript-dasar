describe("Object Type", () => {
  it("should support in typescript", () => {
    const person: { id: number; name: string; hoobies?: string[] } = {
      id: 1,
      name: "Rizal",
    };
    console.info(person);
    person.id = 2;
    person.name = "Pradana";
    person.hoobies = ["Coding"];
    console.info(person);
  });
});
