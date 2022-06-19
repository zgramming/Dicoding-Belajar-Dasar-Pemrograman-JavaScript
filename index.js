import { coffeStock, isCoffeeMachineReady } from "./state.js";
import _ from "lodash";

const makeCoffee = (type, miligrams) => {
  if (coffeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);

console.log("Coffe Machine Is Ready", isCoffeeMachineReady);
