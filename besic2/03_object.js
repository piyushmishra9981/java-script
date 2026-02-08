// sigleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "piyush",
    "full name": "Piyush Mishra",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "piyush@google.com",
    isloggedIn: false,
    lastLogginDays: ["monday", "saturday"]

}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "piyushcahtgpt@gamil.com"
// Object.freeze(jsUser)
jsUser.email = "piyushmicrosoft@gamil.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hellow js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hellow js user,${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
