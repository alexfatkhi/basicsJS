function combineString(...strings){
    return strings.join(" ")
}


const fullName = combineString("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);
