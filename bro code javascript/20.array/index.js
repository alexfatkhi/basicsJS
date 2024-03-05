// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";
console.log(fruits[3]);

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

let numOfFruits = fruits.length; //panjang array
console.log(numOfFruits)


let index = fruits.indexOf("apple"); //index suatu array
console.log(index);

let index1 = fruits.indexOf("manggo"); //-1 karena tidak ada
console.log(index1);

//short cut for displayong element of an array
for (let fruit of fruits) {
    console.log(fruit);
}


//sort
fruits.sort();
fruits.sort().reverse();
