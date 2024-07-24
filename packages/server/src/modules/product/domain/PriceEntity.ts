import { PriceAmountVO } from "./PriceAmountVO";
import { PriceCurrencyVO } from "./PriceCurrencyVO";
import { PriceDecmalsVO } from "./PriceDecmalsVO";

class Price {
  constructor(
    private readonly _currency: PriceCurrencyVO,
    private readonly _amount: PriceAmountVO,
    private readonly _decimals: PriceDecmalsVO
  ) {}

  public getCurrency() {
    return this._currency;
  }

  public getAmount() {
    return this._amount;
  }

  public getDecimals() {
    return this._decimals;
  }
}

export { Price };
