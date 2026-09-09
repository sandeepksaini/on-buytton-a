input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        devices.tellCameraTo(MesCameraEvent.StartVideoCapture)
        basic.showLeds(`
            . . . . .
            # # # . .
            . # . . .
            . # . . .
            # # # . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # # #
            `)
        basic.showLeds(`
            . # . . #
            . # . . #
            . # # # #
            . . # # .
            . . # # .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . # # # .
            . # . # .
            . # # # #
            `)
        basic.showIcon(IconNames.Heart)
        devices.tellCameraTo(MesCameraEvent.TakePhoto)
        for (let index = 0; index < 4; index++) {
            music.setBuiltInSpeakerEnabled(true)
            pins.analogWritePin(AnalogPin.P0, 100)
            led.setBrightness(9e+98)
            music.setVolume(9e+100)
        }
    }
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("G F G A - F E D ", 40), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # # #
        `)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # # . .
        # # # . .
        # . . # .
        `)
    music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
})
