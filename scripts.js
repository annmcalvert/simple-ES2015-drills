// function favMovie(movie = "The Room", name = "World") {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }

let favMovie = (movie = "The Room", name = "World") => { console.log(`my name is ${name} and my favorite movie is ${movie}` );}
favMovie('Pulp Fiction', 'Ann');

let getFirstName = (name) => { let words = name.split(' '); return words[0] }
console.log(getFirstName('Ann Calvert'));


let math = (x, y) => { let exponent = x ^ y; let product = x * y; return obj = {exponent, product}; }
let testObj = math(2, 5);
console.log(`exponent is ${testObj.exponent}`);
console.log(`product is ${testObj.product}`);

let me = ['Ann', 'Bham', 'tacos'];
let infoFunction = (name, location, favFood) => {
    console.log(`I'm ${name} from ${location} and my favorite food is ${favFood}.`)
}
infoFunction(... me);

let myName = 'Ann Calvert';
let namestring = (name) => {
    let nameArray = [...name];
    console.log(nameArray[0]);
    for (i = 0; i < myName.length; i++) {
        console.log(nameArray[i]);
    }
}
namestring(myName);