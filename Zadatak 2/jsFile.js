function MyFunction() {
    var numberForCalculation = prompt("Insert number between 1 and 999", "1");
    if (numberForCalculation != null && isNaN(numberForCalculation)) {
        alert("This is not a number");
    }

    else if (numberForCalculation != null && numberForCalculation < 1 || numberForCalculation > 999) {
        alert("Number must be between 1 and 999");
    }

    else if (numberForCalculation >= 1 && numberForCalculation <= 999) {
        var sqrt = document.getElementById("sqrt");
        var sin = document.getElementById("sin");
        var cos = document.getElementById("cos");
        var round = document.getElementById("round");

        if (sqrt) {
            var sqrtResult = parseFloat(Math.sqrt(numberForCalculation));
            alert(sqrtResult);
        }

        else if (sin) {
            var sinResult = parseFloat(Math.sin(numberForCalculation));
            alert(sinResult);
        }

        else if (cos) {
            var cosResult = parseFloat(Math.cos(numberForCalculation));
            alert(cosResult);
        }

        else if (round) {
            var roundResult = parseFloat(Math.round(numberForCalculation));
            alert(roundResult);
        }
    }

    else {
        alert("You clicked the Cancel button");
    }
};