// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

let fullName = "Bro code";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3); //Bro
//lastName = fullName.slice(4); //code

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);