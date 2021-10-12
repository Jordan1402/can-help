let time = 0
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    time = -1
})
input.onGesture(Gesture.Shake, function () {
    if (time == -1) {
        time = 0
    } else {
        time += 0
        while (time >= 0) {
            basic.showNumber(time)
            basic.pause(1000)
            time += 1
            if (input.buttonIsPressed(Button.A)) {
                break;
            }
        }
    }
})
