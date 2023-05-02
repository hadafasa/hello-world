const coffeeMenu = require("./coffee_data"); // this is connecting this js file to the coffee_data.js file

// print an array of all the drinks on the menu, we can do this by using the map method

const allDrinks = coffeeMenu.map((drink) => drink.name);

console.log("All of the drinks on our menu: ", allDrinks);

//next we need to print an array of all the drinks that cost 5 and under, we can use filter method for this and we will call is cheapDrinks

const cheapDrinks = coffeeMenu.filter((drink) => drink.price <= 5);

console.log("All of the drinks 5 and under: ", cheapDrinks);

// print an array of drinks that are priced at an even number, we can use the filter method again for this with the modulo operator %

const evenPricedDrinks = coffeeMenu.filter((drink) => drink.price % 2 === 0);

console.log("All of the even priced drinks: ", evenPricedDrinks);

//  print the total if you were to order one of every drink
//  use the method reduce

const totalCost = coffeeMenu.reduce((acc, drink) => acc + +drink.price, 0);

console.log(`The total cost of one of every drink is $${totalCost}.`);

// print an array with all the seasonal drinks
// use the method filter

const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal);

console.log("Seasonal drinks: ", seasonalDrinks);

// print all the seasonal drinks with the words "with imported beans" after the name

const seasonalDrinksWithBeans = coffeeMenu
    .filter((drink) => drink.seasonal)
    .map((drink) => `${drink.name} with imported beans`);

console.log("Seasonal drinks with imported beans: ", seasonalDrinksWithBeans);