// Q1 Define the given variables

const budget = 50;
const price1 = 20;
const price2 = 25;

// Q2 Define a function that returns the sum of the two prices before tax
function sumOfGifts(price1, price2) {
    return price1 + price2;
}

// Q3 Invole the sumOfGifts function with the price 1 and price 2 variables
// store the return of this function in a new varaible labeled giftTotal

const giftTotal = sumOfGifts(price1, price2);

// Q4 Define a function that returns the cost of the giftTotal with tax at 8%

function addTax(giftTotal) {
    const taxRate = 0.08;
    return giftTotal * (1 + taxRate);
}

// Q5 Invoke the addTax function by passing in the giftTotal variable
// Store the return of this function in a new varaible labled giftsWithTax

const giftsWithTax = addTax(giftTotal);

// Q6 Define a function that compares giftsWithTax and the budget variable.
// The function should return true if the budget is greater than or equal to giftsWithTax

function holidayShopping(budget, giftTotal) {
    const giftsWithTax = addTax(giftTotal);
    return budget >= giftsWithTax;
}

// Q7 Invoke the holidayShopping function by passing in the budget and giftsWithTax

console.log(holidayShopping(budget, giftTotal));