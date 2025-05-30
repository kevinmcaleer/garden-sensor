let wait_in_seconds = 0
let message = ""
let sound = 0
let brightness = 0
let temp = 0
datalogger.setColumnTitles(
"temp",
"light",
"sound"
)
radio.setGroup(42)
while (true) {
    temp = input.temperature()
    brightness = input.lightLevel()
    sound = input.soundLevel()
    datalogger.log(
    datalogger.createCV("light", brightness),
    datalogger.createCV("temp", temp),
    datalogger.createCV("sound", sound)
    )
    message = "T: " + ("" + temp) + ", L: " + ("" + brightness) + ", S: " + ("" + sound)
    radio.sendString(message)
    basic.showString("S")
    // Indicate sending
    wait_in_seconds = 2000
    basic.clearScreen()
    basic.pause(wait_in_seconds)
}
