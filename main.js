function CountDiceSum() {
    var sum = 0;
    sum = sum + DiceRandom(4, document.getElementById("NumberOfD4").value);
    sum = sum + DiceRandom(6, document.getElementById("NumberOfD6").value);
    sum = sum + DiceRandom(8, document.getElementById("NumberOfD8").value);
    sum = sum + DiceRandom(10, document.getElementById("NumberOfD10").value);
    sum = sum + DiceRandom(12, document.getElementById("NumberOfD12").value);
    sum = sum + DiceRandom(20, document.getElementById("NumberOfD20").value);
    sum = sum + DiceRandom(100, document.getElementById("NumberOfD100").value);
    document.getElementById("DiceOutput").value = sum;
}

function DiceRandom(die, iter) {
    var sum = 0;
    for (var i = 0; i < iter; i++) {
        sum = sum + Math.floor(Math.random() * die) + 1;
    }
    return sum;
}

function OpenWindow(id) {
    var Element = document.getElementById(id);
    Element.style.display = "block";
    document.getElementById("ShadowWall").style.display = "block";
}

function CloseWindow(id) {
    var Element = document.getElementById(id);
    Element.style.display = "none";
    document.getElementById("ShadowWall").style.display = "none";
}

