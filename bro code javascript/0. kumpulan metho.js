//-- STRING METHOD--------------------------------------------------------------------------------
let userName = "Bro Code";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
phoneNumber = phoneNumber.replaceAll("-", "");



let fullName = "Bro code";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3); //Bro
//lastName = fullName.slice(4); //code

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);







//--ARRAY METHOD--------------------------------------------------------------------------------
fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

fruits.splice(2, 0, "kiwi", "orange") // at position 2 add kiwi and lemon

fruits.splice(2, 3) // at position 2, remove 2 element

//-----

let matrix = ["mangga", "apple", "durian"];     
console.log(matrix.join(" "));

//-----

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);

function double(element, index, array) {
    array[index] = element * 2;
}






//--NUM METHOD---------------------------------------------------------------------------------
let x = 3.21;
let y = 2;
let z = 4

let a;

a = Math.round(x); atas/bawah tergantug nilai
a = Math.floor(x); bawah
a = Math.ceil(x); atas
a = Math.trunc(x); hapus nilai dibelakang koma
a = Math.pow(x,y); x pangkat y
a = Math.sqrt(x); akar 2 dari x 
a = Math.log(x); 
a = Math.sin(x);
a = Math.cos(x);
a = Math.tan(x);
a = Math.abs(x); selalu positif
a = Math.sign(x); //1 if the number is positive
                    //-1 if the number is negative
                    //0 if the number is zero
                    let max = Math.max(x, y, z);
                    let min = Math.min(x, y, z);
Math.random()




//--CONVERSION----------------------------------------------------------------------------------
let x = "pizza";
let y = "pizza";
let z = "pizza"; //jika kosong ini akan false

x = Number(x);
y = String(y);
z = Boolean(z);

isNaN(guess) //apakah Nan ?