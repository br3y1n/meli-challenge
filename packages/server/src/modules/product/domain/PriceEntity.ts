import { PriceAmountVO } from "./PriceAmountVO";
import { PriceCurrencyVO } from "./PriceCurrencyVO";
import { PriceDecimalsVO } from "./PriceDecimalsVO";

class Price {
  constructor(
    private readonly _currency: PriceCurrencyVO,
    private readonly _amount: PriceAmountVO,
    private readonly _decimals: PriceDecimalsVO
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
