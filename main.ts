let wait_in_seconds = 0
let message = ""
let sound = 0
let brightness = 0
let temp = 0
radio.setGroup(42)
while (true) {
    temp = input.temperature()
    brightness = input.lightLevel()
    sound = input.soundLevel()
    message = "T:{temp},L:{light},S:{sound}"
    radio.sendString(message)
    basic.showString("S")
    // Indicate sending
    wait_in_seconds = 2000
    basic.clearScreen()
    basic.pause(wait_in_seconds)
}
