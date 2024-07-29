import { ProductPictureVO } from "@modules/product/domain";

describe("ProductPictureVO tests:", () => {
  it("should create an instance with a valid string value", () => {
    const value = "http://example.com/picture.jpg";
    const productPicture = new ProductPictureVO(value);

    expect(productPicture).toBeInstanceOf(ProductPictureVO);

    expect(productPicture.getValue()).toBe(value);
  });
});
