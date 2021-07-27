const {coffeeStock, isCoffeeMachineReady} = require('./coffee');

console.log(coffeeStock);
console.log(isCoffeeMachineReady);

const makeCoffee = (type, miligram) => {
    if (coffeeStock[type] >= miligram) {
        console.log('Kopi berhasil dibuat');
    }else{
        console.log('Biji kopi habis!');
    }
}

makeCoffee('robusta', 80);