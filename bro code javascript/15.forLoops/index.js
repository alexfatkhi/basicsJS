//for loop = repeat some code a LIMITED amount of times

for (let i = 0; i <= 12; i+=2){
    console.log(i);
}


for (let i = 0; i <= 12; i++){
    if (i == 13) {
        break;
    } else {
        console.log(i);
    }
    }



for (let i = 0; i <= 12; i++){
    if (i == 13) {
        continue;
    } else {
        console.log(i);
    }
    }
