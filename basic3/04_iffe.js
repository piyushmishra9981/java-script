// Immediately Invoked Fuction Express (IFFE)

(function cahi(){
    //named IFFE
    console.log(`DB CONNECTED`);
    
})();

( (name)  => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('piyush')