import * as earningsToCalculate from "../src/stockCalculations";

export class Broker {
  public commission: number;
  public amountToInvest: number;

  constructor(commision: number, amountToInvest: number) {
    this.commission = commision;
    this.amountToInvest = amountToInvest;
  }

  public getCommision() {
    return this.commission;
  }

  public setCommision(commission: number) {
    this.commission = commission;
  }

  public getAmount() {
    return this.amountToInvest;
  }

  public setCommion(amountToInvest: number) {
    this.amountToInvest = amountToInvest;
  }

  public purchaseStocks() {
    const purchaseCommission: number = (this.getCommision() * this.getAmount()) / 100;
    const amountToInvest: number = this.getCommision() - purchaseCommission;
    const stockPrices = earningsToCalculate.StockValue.purchaseStock(amountToInvest);

    return stockPrices;
  }

  public sellStocks() {
    const closeStockValueFinal = earningsToCalculate.StockValue.closeStockValue();
    const parseStock = parseFloat(closeStockValueFinal);
    return (earningsToCalculate.StockValue.totalStock(this.purchaseStocks()) * parseStock).toFixed(
      3,
    );
  }
}
