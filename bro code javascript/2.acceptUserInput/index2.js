let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("welcome").innerText = `Welcome ${username}`;
}