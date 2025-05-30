wait_in_seconds = 0
message = ""
sound = 0
brightness = 0
temp = 0
radio.set_group(42)

while True:
    temp = input.temperature()
    brightness = input.light_level()
    sound = input.sound_level()
    message = "T:{temp},L:{light},S:{sound}"
    radio.send_string(message)
    basic.show_string("S")
    
    # Indicate sending
    wait_in_seconds = 2000
    basic.clear_screen()
    basic.pause(wait_in_seconds)