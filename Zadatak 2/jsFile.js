function MyFunction(operation) {
    var numberForCalculation = prompt("Insert number between 1 and 999", "1");

    if (numberForCalculation != null && isNaN(numberForCalculation)) {
        alert("This is not a number");
    }

    else if (numberForCalculation != null && numberForCalculation < 1 || numberForCalculation > 999) {
        alert("Number must be between 1 and 999");
    }

    else if (numberForCalculation >= 1 && numberForCalculation <= 999) {
        let result;

        switch (operation) {
            case "button1":
                result = parseFloat(Math.sqrt(numberForCalculation));
                alert(result);
                break;
            case "button2":
                result = parseFloat(Math.sin(numberForCalculation));
                alert(result);
                break;
            case "button3":
                result = parseFloat(Math.cos(numberForCalculation));
                alert(result);
                break;
            default:
                result = parseFloat(Math.round(numberForCalculation));
                alert(result);
                break;
        }
    }

    else {
        alert("You clicked the Cancel button");
    }
};