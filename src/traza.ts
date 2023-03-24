import {  Broker } from "../src/Broker";

const traza = new Broker(50, 2);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ordenarArray() {
    const compraAcciones = traza.purchaseStocks();
    const groups = [];
    for (let i = 0 ; i < compraAcciones.length ; i++) {
        grops.push(months.slice(i, i + 4));
    }
}


console.log(compraAcciones);
