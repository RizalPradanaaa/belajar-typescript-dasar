import { Category, Product } from "../src/type-alias";
describe("Type Alias", () => {
  it("should support in typescript", () => {
    const category: Category = {
      id: 1,
      name: "Game",
    };
    const product: Product = {
      id: "1",
      name: "God of war",
      price: 200000,
      category: category,
    };

    // console.info(category);
    // console.info(product);
    console.info(product.category);
    console.info(product.category.name);
  });
});
