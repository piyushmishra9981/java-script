function sayMyName(){
    console.log("P");
    console.log("I");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");

}


// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMassage(username = "sam"){
    if(!username){
        console.log("plese enter a username");
        return
        

    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("piyush"));
// console.log(loginUserMassage("piyush"));


function calculateCartPrice( val1, val2, ...num1){              //Rest operatior
    return num1

}

calculateCartPrice(2)
// console.log(calculateCartPrice(200, 300, 400));

const user ={
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue (getArraay){
    return getArraay[0]

}
console.log(returnSecondValue(myNewArray));

