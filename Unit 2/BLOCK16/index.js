const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

// having the customers / objects need to make functions that will run through the customers and give a grand total after some math
// best to think of it as a giant loop where we have the declared variables and all we are doing is making math problems for it to go through
// need to have a function to do refill cost, subscription discount, coupon discount

// make a function that calculates the total refill cost of a customer
    // customer as parameter
    // calculates the total refill cost by multiplying the price per refill by the number of refills
function calculateRefillTotal(customer) {
    return customer.pricePerRefill * customer.refills;
}

// make a function that applies the subscription discount to a total cost
    // refill total as the parameter
    // if the customer has a subscription calculate the discounted cost by multiplying the total cost by .25 which is 25%
function calculateSubscriptionDiscount(refillTotal) {
    return refillTotal * 0.25;
}

// make a function that applies the coupon discount to total cost
    // if customer has a coupon calculate the discounted cost by subtract 10 from total cost
function calculateCouponDiscount(subscriptionDiscount) {
    return subscriptionDiscount - 10;
}


// call the functions in order for grand total
    // first is total refill total
    // second is apply subscription discount
    // third is apply coupon discount
    // return final total
function calculateGrandTotal(customer) {
    let refillTotal = calculateRefillTotal(customer);
    if (customer.subscription) {
        refillTotal -= calculateSubscriptionDiscount(refillTotal);
    }
    if (customer.coupon) {
        refillTotal -= 10;
    }

    return `Your grand total is ${refillTotal.toFixed(2)}`;
}

// added toFixed in the grand total function just to have it formatted to show two decimal places because it just looked weird without it


// last is to console log the grand total with each customer
// console.log(calculateGrandTotal(customer));
console.log(calculateGrandTotal(timmy));
console.log(calculateGrandTotal(sarah));
console.log(calculateGrandTotal(rocky));