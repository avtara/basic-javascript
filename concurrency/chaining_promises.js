const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!state.isCoffeeMachineBusy){
                resolve('Mesin kopi ready!');
            }else{
                reject('Maaf, Mesin kopi sibuk.')
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250){
                resolve('Stok cukup bisa membuat kopi');
            }else{
                reject('Stock kurang!')
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log('Membuatkan kopi');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Kopi sudah dibuat!')
        }, 2000);
    });
};

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value)=>{
            console.log(value);
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectionReason => {
            console.log(rejectionReason);
            state.isCoffeeMachineBusy = false;
        })
}

makeEspresso();