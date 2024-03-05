let username = "";

while (username === "" || username === null) {
    username = window.prompt(`Enter Your Name : `)
}

/*
--Bisa juga dengan do while--

do{ username = window.prompt(`Enter Your Name : `)
}
while(username === "" || username === null)

*/

console.log(`Hello ${username}`)

