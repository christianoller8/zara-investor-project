import * as dataLibrary from "csvtvu";

export namespace StockValue {
  export function getDates() {
    const allData = dataLibrary.getAllData();
    return allData;
  }

  export function getThursdays() {
    for (let i = 0; i < getDates().length; i++) {
      dataLibrary.searchThu(getDates()[i].date);
    }

    return dataLibrary.thursdays;
  }

  export function getLastThursdays() {
    const lastThursdays = dataLibrary.filterMonth(getThursdays());

    return lastThursdays;
  }

  export function getPurchaseDays() {
    const purchaseDays: dataLibrary.alldata[] = dataLibrary.shoppingDay2(
      getDates(),
      getLastThursdays(),
    );

    return purchaseDays;
  }

  export function openStockValues() {
    const open = getPurchaseDays();
    const openDays: string[] = [];
    for (let i = 0; i < open.length; i++) {
      openDays.push(open[i].open);
    }
    return openDays;
  }

  export function closeStockValue() {
    const close = getDates()[0].close;
    return close;
  }

  export function purchaseStock(moneyToInvest: number) {
    const stockValue = openStockValues();
    const openValues = stockValue.map(parseFloat);
    const totalStock: number[] = [];

    for (let i = 0; i < openValues.length; i++) {
      totalStock.push(parseFloat((moneyToInvest / openValues[i]).toFixed(20)));
    }
    return totalStock;
  }

  export function totalStock(stockPrices: number[]) {
    let resultStocks = 0;
    for (let i = 0; i < stockPrices.length; i++) {
      resultStocks += stockPrices[i];
    }
    return resultStocks;
  }
}
