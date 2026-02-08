const marval_heros = ["thor", "Ironman", " spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);                  //concat operator

const all_new_Heros = [...marval_heros,...dc_heros]
// console.log(all_new_Heros);                //sprad operator

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("piyush"));
console.log(Array.from("piyush"));
console.log(Array.from({name: "piyush"})); // intresting

let sore1 = 100
let sore2 = 200
let sore3 = 300

console.log(Array.of(sore1, sore2, sore3));

