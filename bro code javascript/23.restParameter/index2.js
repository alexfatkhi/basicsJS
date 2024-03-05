function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;

}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`)

function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result/numbers.length;
}

const total1 = getAverage(75, 100, 85, 90);

console.log(total1)