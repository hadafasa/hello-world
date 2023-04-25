// management team has decided they want to collect information as a survey, our friend jake will be completing it so what we need is
        // create an object called customer
        // have it include firstName, lastName, email, phone, zipCode, favoriteFlavors, cupSize, favoriteStore, firstVisit
        // include the selected values in the format of key: value

let customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};

// jake has made some mistakes when filing out the survey so we need to make changes to the existing keys
// all we need to do is pick each one to change and = it to the new value that it will have
customer ["email"] = "Jak3Smith1992@email.com";
customer ["phone"] = 3195551234;
customer ["zipCode"] = "63123";
customer ["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

// management has decided to get rid of a couple keys in our survey so we need to delete them and use a dot notation of the object.key
delete customer.zipCode;
delete customer.favoriteStore;

// management team also wants to add new keys and have jake fill out the values as well
// so similar to how we changed the pre-existing keys we are just going to name the new keys and add the values to them in the same fashion customer ["key"] = value
customer ["toppings"] = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer ["futureFlavors"] = "mango";
customer ["todaysPurchaseCost"] = 5.32;


console.log(customer);
