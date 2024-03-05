// callback = a function that is passed as an argument
//            to another function.

//used to handle asynchronous operations:
//1. Reading a file
//2. Network request
//3. Interacting with database


function hello(callback) {
    setTimeout(function () {
        console.log("Hello");
        callback(); // Memanggil callback setelah output "Hello"
    }, 3000);
}

function goodbye() {
    console.log("Goodbye!");
}

hello(goodbye); // Memanggil fungsi hello dengan fungsi goodbye sebagai callback
