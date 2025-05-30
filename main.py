wait_in_seconds = 0
message = ""
sound = 0
brightness = 0
temp = 0
datalogger.set_column_titles("temp", "light", "sound")
radio.set_group(42)
while True:
    temp = input.temperature()
    brightness = input.light_level()
    sound = input.sound_level()
    datalogger.log(datalogger.create_cv("light", brightness),
        datalogger.create_cv("temp", temp),
        datalogger.create_cv("sound", sound))
    message = "T: " + ("" + str(temp)) + ", L: " + ("" + str(brightness)) + ", S: " + ("" + str(sound))
    radio.send_string(message)
    basic.show_string("S")
    # Indicate sending
    wait_in_seconds = 2000
    basic.clear_screen()
    basic.pause(wait_in_seconds)