import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("should return hello zall", function () {
    expect(sayHello("Rizal")).toBe("Hello Rizal");
  });
});
