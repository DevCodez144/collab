sp = 0
cp = 0
eon = 0
tbn = 0
sqn = 0
n2 = 0
n1 = 0
Type = game.ask_for_number("Enter a number between 1-5")
if Type == 1:
    n1 = game.ask_for_number("Enter num a")
    n2 = game.ask_for_number("Enter num b")
    game.splash("a = " + ("" + str(n1)), "b = " + ("" + str(n2)))
    game.splash("a = " + ("" + str(n2)), "b = " + ("" + str(n1)))
elif Type == 2:
    sqn = game.ask_for_number("Enter a number")
    game.splash("Square root of " + ("" + str(sqn)) + " = " + ("" + str(sqn * sqn)))
elif Type == 3:
    tbn = game.ask_for_number("Enter a number")
    for mltn in range(11):
        game.splash("" + str(tbn) + " x " + ("" + str(mltn)) + " = " + ("" + str(tbn * mltn)))
elif Type == 4:
    eon = game.ask_for_number("Enter a number")
    if eon % 2 == 0:
        game.splash("This is an Even number")
    else:
        game.splash("This is an Odd number")
elif Type == 5:
    cp = game.ask_for_number("Input Cost Price of Product")
    sp = game.ask_for_number("Input Selling Price of Product")
    if sp > cp:
        game.splash("Profit of Rs." + ("" + str((sp - cp))))
    else:
        game.splash("Loss of Rs." + ("" + str((cp - sp))))