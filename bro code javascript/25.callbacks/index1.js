// callback = a function that is passed as an argument
//            to another function.

//used to handle asynchronous operations:
//1. Reading a file
//2. Network request
//3. Interacting with database


hello(wait);


function hello(callback){
    console.log("Hello!");
    callback();
}

function wait() {
    console.log("Wait!")
}

function leave() {
    console.log("Leave!")
}

function goodbye(){
    console.log("Goodbye!");
}