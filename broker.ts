import * as earningsToCalculate from "./stockCalculations";

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
        let purchaseCommission: number = (this.getCommision() * this.getAmount() / 100)
        let amountToInvest: number = this.getCommision() - purchaseCommission;
        let stockPrices = earningsToCalculate.StockValue.purchaseStock(amountToInvest);

        return stockPrices;
    }

    public sellStocks() {
        const closeStockValueFinal = earningsToCalculate.StockValue.closeStockValue();
        let parseStock = parseFloat(closeStockValueFinal);
        return (earningsToCalculate.StockValue.totalStock(this.purchaseStocks()) * parseStock).toFixed(3);
    }


}