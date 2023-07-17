let sp = 0
let cp = 0
let eon = 0
let tbn = 0
let sqn = 0
let n2 = 0
let n1 = 0
let Type = game.askForNumber("Enter a number between 1-5")
if (Type == 1) {
    n1 = game.askForNumber("Enter num a")
    n2 = game.askForNumber("Enter num b")
    game.splash("a = " + ("" + n1), "b = " + ("" + n2))
    game.splash("a = " + ("" + n2), "b = " + ("" + n1))
} else if (Type == 2) {
    sqn = game.askForNumber("Enter a number")
    game.splash("Square root of " + ("" + sqn) + " = " + ("" + sqn * sqn))
} else if (Type == 3) {
    tbn = game.askForNumber("Enter a number")
    for (let mltn = 0; mltn <= 10; mltn++) {
        game.splash("" + tbn + " x " + ("" + mltn) + " = " + ("" + tbn * mltn))
    }
} else if (Type == 4) {
    eon = game.askForNumber("Enter a number")
    if (eon % 2 == 0) {
        game.splash("This is an Even number")
    } else {
        game.splash("This is an Odd number")
    }
} else if (Type == 5) {
    cp = game.askForNumber("Input Cost Price of Product")
    sp = game.askForNumber("Input Selling Price of Product")
    if (sp > cp) {
        game.splash("Profit of Rs." + ("" + (sp - cp)))
    } else {
        game.splash("Loss of Rs." + ("" + (cp - sp)))
    }
} else if (Type != 1 || (Type != 2 || (Type != 3 || (Type != 4 || Type != 5)))) {
    game.splash("Please enter a number between \"1-5\"")
}
