import { ProductCategoryIdVO } from "./ProductCategoryIdVO";
import { ProductConditionVO } from "./ProductConditionVO";
import { ProductDescriptionVO } from "./ProductDescriptionVO";
import { ProductFreeShippingVO } from "./ProductFreeShippingVO";
import { ProductIdVO } from "./ProductIdVO";
import { ProductPictureVO } from "./ProductPictureVO";
import { ProductPriceVO } from "./ProductPriceVO";
import { ProductSoldQuantityVO } from "./ProductSoldQuantityVO";
import { ProductTitleVO } from "./ProductTitleVO";

class Product {
  constructor(
    private readonly _id: ProductIdVO,
    private readonly _title: ProductTitleVO,
    private readonly _categoryId: ProductCategoryIdVO,
    private readonly _picture: ProductPictureVO,
    private readonly _condition: ProductConditionVO,
    private readonly _freeShipping: ProductFreeShippingVO,
    private readonly _soldQuantity: ProductSoldQuantityVO,
    private readonly _description: ProductDescriptionVO,
    private readonly _price: ProductPriceVO
  ) {}

  public getId() {
    return this._id;
  }

  public getTitle() {
    return this._title;
  }

  public getPicture() {
    return this._picture;
  }

  public getCondition() {
    return this._condition;
  }

  public getFreeShipping() {
    return this._freeShipping;
  }

  public getSoldQuantity() {
    return this._soldQuantity;
  }

  public getDescription() {
    return this._description;
  }

  public getPrice() {
    return this._price;
  }

  public getCategoryId() {
    return this._categoryId;
  }
}

export { Product };
