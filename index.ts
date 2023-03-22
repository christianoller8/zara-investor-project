import { CURRENCY } from "./env/env";
import { Broker } from "./src/Broker";

const broker = new Broker(50, 2);

console.log("El inversor ha ganado: "+broker.sellStocks(),`${CURRENCY}`);