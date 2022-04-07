basic.forever(function () {
    serial.writeLine("1:" + BosonKit.bos0038(AnalogPin.P0))
    serial.writeLine("2:" + BosonKit.bos0011(AnalogPin.P1))
    serial.writeLine("3:" + BosonKit.bos0056(AnalogPin.P2))
    basic.pause(1000)
})
