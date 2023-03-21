import * as dataLibrary from "csvtvu";

export namespace StockValue {
    export function getDates() {
        let allData = dataLibrary.getAllData();
        return allData;

    }

    export function getThursdays() {
        let thursdays: string[] = [];
        for (let i = 0; i < getDates().length; i++) {
            dataLibrary.searchThu(getDates()[i].date);
        }

        return thursdays = dataLibrary.thursdays
    }

    export function getLastThursdays() {
        let lastThursdays = dataLibrary.filterMonth(getThursdays());

        return lastThursdays
    }

    export function getPurchaseDays() {
        let purchaseDays: dataLibrary.alldata[] = dataLibrary.shoppingDay2(getDates(), getLastThursdays());

        return purchaseDays;
    }

    export function openStockValues() {
        let open = getPurchaseDays();
        let openDays: string[] = [];
        for (let i = 0; i < open.length; i++) {
            openDays.push(open[i].open)

        }
        return openDays;
    }

    export function closeStockValue() {
        let close = getDates()[0].close;
        return close
    }

    export function purchaseStock(moneyToInvest: number) {
        let stockValue = openStockValues();
        let openValues = stockValue.map(parseFloat);
        let totalStock: number[] = [];

        for (let i = 0; i < openValues.length; i++) {
            totalStock.push(parseFloat((moneyToInvest / openValues[i]).toFixed(20)));
        }
        return totalStock;
    }

    export function totalStock(stockPrices: number[]) {
        let resultStocks: number = 0;
        for (let i = 0; i < stockPrices.length; i++) {
            resultStocks += stockPrices[i];
        }
        return resultStocks;
    }
    
}