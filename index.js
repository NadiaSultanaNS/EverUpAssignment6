//Question#1
let win = document.getElementById("wintrophy");

function winner(score1, score2) {
    if (score1 >= 100) {
        win.innerHTML = "Yay!! Nets wins the trophy"
    }
    if (score2 >= 100) {
        win.innerHTML = "Yay!! Kincks wins the trophy"
    }
    if (score1 === score2 && (score1 >= 100 && score2 >= 100)) {
        win.innerHTML = "No team wins the trophy"
    }
}
winner(120, 120);

//Question#2

let tip = document.getElementById("tipcalculator")

function tipCalculator(bill) {


    switch (bill >= 30 && bill <= 100) {
        case 1:
            tip.innerHTML = `This bill was ${bill}, the tip was ${(15 / bill) * bill}, and the total value is ${((15 / bill) * bill) + bill}`
                ;
            break;

        default:
            tip.innerHTML = `This bill was ${bill}, the tip was ${(20 / bill) * bill}, and the total value is ${((20 / bill) * bill) + bill}`

    }
}
tipCalculator(101);

//Question#3
let cel = document.getElementById("celsius");
let fah = document.getElementById("fahrenheit");

celsiusToFahrenheit = (celsius) => {
    cel.innerHTML = `${celsius} NNC is ${(celsius * 1.8) + 32} NNF`
}
// function celsiusToFahrenheit(celsius) {
//     cel.innerHTML = `${celsius} NNC is ${(celsius * 1.8) + 32} NNF`
// }
function fahrenheitToCelsius(fahrenheit) {
    fah.innerHTML = `${fahrenheit} NNF is ${(fahrenheit - 32) * .556} NNC`
}
celsiusToFahrenheit(50);
fahrenheitToCelsius(100);