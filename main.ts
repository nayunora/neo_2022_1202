function do1 () {
    for (let index = 0; index <= 8; index++) {
        range1.showRainbow(1, 180)
        strip.show()
        basic.pause(100)
    }
}
function do2 () {
    for (let index = 0; index <= 8; index++) {
        let range2: neopixel.Strip = null
        range2.showRainbow(180, 360)
        strip.show()
        basic.pause(100)
    }
}
let touch_sensor2 = 0
let touch_sensor1 = 0
let pressure_sensor = 0
let range1: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 16, NeoPixelMode.RGB)
range1 = strip.range(0, 8)
let range3 = strip.range(8, 8)
strip.setBrightness(10)
basic.pause(100)
basic.forever(function () {
    pressure_sensor = pins.analogReadPin(AnalogPin.P3)
    serial.writeNumber(pressure_sensor)
    serial.writeLine("")
    if (pressure_sensor > 600) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    } else if (pressure_sensor > 400) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        strip.show()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        strip.clear()
    }
    touch_sensor1 = pins.analogReadPin(AnalogPin.P4)
    if (touch_sensor1 == 1) {
        do1()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    touch_sensor2 = pins.analogReadPin(AnalogPin.P10)
    if (touch_sensor2 == 1) {
        do2()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
