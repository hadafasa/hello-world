let shoeObject = {
    brand: "Nike",
    laces: true,
    velcro: false,
    color: ["green", "white", "red", "black"],
    price: 100,
    currency: "USD",
    activityType: "walking",
    random: {
      key1: "hello",
      key2: "bye",
    }
  };
  
  // bracket notation
  // change a key value pair that already exists
  shoeObject["velcro"] = true;
  // console.log(shoeObject);
  
  // add a new key value pair that does not already exist in an object
  shoeObject["insole"] = false;
  // console.log(shoeObject);
  
  // key names are unique
  // values can be duplicated
  
  let keyName = "activityType";
  // console.log(shoeObject[keyName]);
  // console.log(shoeObject["vel" + "cro"]);
  
  // delete a key value pair
  delete shoeObject["activityType"];
  // console.log(shoeObject);
  
  // dot notation
  // console.log   --the dot is what the dot notation stands for
  // console is an object while the .log is a property that passes through it showing what is passing through it
  // change a key value pair that already exists that uses dot notation
  shoeObject.velcro = true;
  // console.log(shoeObject);
  
  // add a new key value pair that does not already exist in an object
  shoeObject.insole = false;
  // console.log(shoeObject);
  
  // delete a key value pair that already exists
  delete shoeObject.activityType;
  shoeObject.keyName
  // console.log(shoeObject);
  
  // dot notation is mostly used when you have a very precise key name
  // you have to be extremely specific --for example if i use console.log(shoeObject.keyName); after i have deleted activity type then it will give you back undefined when you run the code.
  // always good to know when you know how your code will come out or whether it doesnt come out
  
  // object for loop
  // always have to use bracket notation when using a loop what to grab and use
  for (let key in shoeObject) {
    let value = shoeObject[key];
    console.log(key, " ", value);
  }
  
  
  // you can use these to show it in different ways
  // get all of the keys in object
  console.log(Object.keys(shoeObject));
  
  // get all of the values in object
  console.log(Object.values(shoeObject));
  
  // get all the key value pairs
  console.log(Object.entries(shoeObject));
  
  // objects don't have a length
  // also the word "key" can be actually called anything but industry standard the word "key" is used so just keep using that instead of making it more confusing
  
  
  // what if you want to access a value in an object
  console.log(shoeObject["color"]); //[...]
  console.log(shoeObject["random"]);
  console.log(shoeObject["random"].key2); // or shoeObject["random"].key2
  
  // another way to simplify it or make it easier to understand
  // let randomObject = shoeObject["random"];
  // let key2 = randomObject.key2;




//guided practice block 15
  // You ate a cheesburger for 12 dollars
  // jonah had the 20 steak
  // amys soup cost 8
  // mateo had mac and cheese for 14
  // cheyenne 16
// const dinner = {
//   cheeseburger: 12,
//   steak: 20,
//   soup: 8,
//   macAndCheese: 14,
//   cheyenne: 16
// }
