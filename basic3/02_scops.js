//var c = 300                        // aur jo bahar hota h global scope
let a = 300
if (true) {
    let a = 10
    const b = 20                // ye jo andr h block sope h 
    // console.log("INNER: ", a);
    
}




// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "piyush"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}


// one()

if (true) {
    const username  = "piyush"
    if (username === "piyush") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
    
}
// console.log(username);






//+++++++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5));

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

