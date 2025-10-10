const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'kiwi','mango', 'lemon', "pear"] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, count


// fruits array-indəki hər bir meyvənin adını böyük hərflərlə (toUpperCase()) consola çıxart.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
}
// vegetables array-indəki hər bir tərəvəzin adını kiçik hərflərlə (toLowerCase()) consola çıxart.
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i].toLowerCase());
}
// fruits array-indəki bütün meyvələri vergüllə ayrılmış bir stringə çevir.
console.log(fruits.join(", "));

// webTechs array-ində "React" sözünün olub-olmadığını yoxla (includes()).

console.log(webTechs.includes("React")); // true 

// countries array-ində hər bir ölkə adının ilk 3 hərfini götürərək yeni bir array düzəlt.

// Nümunə: ['Fin', 'Den', 'Swe', 'Nor', 'Ice']

const newCountries = []

for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i].slice(0, 3).toUpperCase())
}
console.log(newCountries);

// fruits array-ində 5 hərfdən az olan meyvələri filtr et (filter()).
const filteredFruits = []

for (let i = 0; i < fruits.length; i++) {
    if(fruits[i].length < 5){
        filteredFruits.push(fruits[i])
    }
}
console.log(filteredFruits);

// vegetables array-indəki bütün sözləri tərsinə yaz (reverse() və join() istifadə et).

let reversedVegetables = []

// for (let i = 0; i < vegetables.length; i++) {
//     let reversed = ""
//     for(let j = vegetables[i].length - 1; j >= 0; j--){
//         reversed += vegetables[i][j]
//     }
//     reversedVegetables.push(reversed.toLowerCase())
// }

// second version


for (let i = 0; i < vegetables.length; i++) {
    reversedVegetables.push(vegetables[i].toLowerCase().split("").reverse().join(""))
}
console.log("reversed vegetables: ", reversedVegetables);


const students = ["mahir", "nurana", "samir", "aytac", "iradə"]

let newStudents = []
for (let i = 0; i < students.length; i++) {
    // newStudents.push(students[i][0].toUpperCase().concat(students[i].slice(1)))  
    newStudents.push(students[i][0].toUpperCase() + students[i].slice(1))  
}

console.log(newStudents);
