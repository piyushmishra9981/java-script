const user = {
    username: "piyush",
    price: 999,

    wellcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }

}

// user.wellcomeMessage()
// user.username = "sam"
// user.wellcomeMessage()

// console.log(this);

// function chai(){
//     let username = "piyush"
//     console.log(this.username);

// }

// chai()

// const chai = function(){
//     let username = "piyush"
//     console.log(this.username);
// }


const chai = () => {
    let username = "piyush"
    console.log(this);
}



// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "piyush"})




console.log(addTwo(3, 4));


const myArray = [2, 5, 6, 7, 6]

// myArray.forEach()