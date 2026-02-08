const myNumbers =[1, 2, 4, 5, 6, 7, 8, 9 , 10]

// const newNums = myNumbers.map( (num) => num + 10 )    // jb scope open krna h to return krna h nhi to undifine ayega jaise { return num + 10}

const newNums = myNumbers
                  .map((num) => num * 10 )
                  .map( (num) => num + 1 )
                  .filter( (num)=> num>= 40)
console.log(newNums);
