let counter = 0;

function decrease() {
    counter -=1
    document.getElementById("text").style.color = "red";
    document.getElementById("text").innerHTML = counter;
}

function increase() {
    counter += 1
    document.getElementById("text").style.color = "green";
    document.getElementById("text").innerHTML = counter;
}

function reset() {
    counter = 0
    document.getElementById("text").style.color = "blue"
    document.getElementById("text").innerHTML = counter;
}