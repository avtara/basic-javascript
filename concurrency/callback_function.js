const orderCoffee = callback => {
    let coffee = null;
    console.log('Sedang membuat kopi, silahkan menunggu ...');
    setTimeout(() => {
        coffee = 'Kopi sudah tersedia!';
        callback(coffee);
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});

// Callback hell
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}