function F () {
    Y = 4
    for (let index = 0; index < 3; index++) {
        led.plot(0, Y)
        led.plot(2, Y)
        led.plot(4, Y)
        Y = Y - 1
        basic.pause(30)
    }
    basic.clearScreen()
}
function danceB () {
    basic.clearScreen()
    Proxi.linksdrehung()
    basic.pause(150)
    Proxi.rechtsdrehung()
    basic.pause(150)
    Proxi.stehenbleiben()
    Proxi.drehungsstopp()
}
function songA () {
    basic.clearScreen()
    C()
    music.playTone(262, music.beat(BeatFraction.Half))
    Proxi.linksdrehung()
    basic.pause(50)
    Proxi.drehungsstopp()
    C()
    music.playTone(262, music.beat(BeatFraction.Half))
    Proxi.linksdrehung()
    basic.pause(50)
    Proxi.drehungsstopp()
    GA()
    music.playTone(392, music.beat(BeatFraction.Half))
    Proxi.linksdrehung()
    basic.pause(50)
    Proxi.drehungsstopp()
    GA()
    music.playTone(392, music.beat(BeatFraction.Half))
    Proxi.rechtsdrehung()
    basic.pause(50)
    Proxi.drehungsstopp()
    B()
    music.playTone(440, music.beat(BeatFraction.Half))
    Proxi.rechtsdrehung()
    basic.pause(50)
    Proxi.drehungsstopp()
    B()
    music.playTone(440, music.beat(BeatFraction.Half))
    Proxi.rechtsdrehung()
    basic.pause(50)
    Proxi.drehungsstopp()
    GA()
    music.playTone(392, music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.A, function () {
    time = time + 1
    basic.showNumber(time)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
function danceA () {
    basic.clearScreen()
    Proxi.rückwärts()
    basic.pause(150)
    Proxi.vorwärts()
    basic.pause(150)
    Proxi.stehenbleiben()
    Proxi.drehungsstopp()
}
function B () {
    Y = 4
    for (let index = 0; index < 5; index++) {
        led.plot(0, Y)
        led.plot(2, Y)
        led.plot(4, Y)
        Y = Y - 1
        basic.pause(20)
    }
    basic.clearScreen()
}
function DE () {
    Y = 4
    for (let index = 0; index < 2; index++) {
        led.plot(0, Y)
        led.plot(2, Y)
        led.plot(4, Y)
        Y = Y - 1
        basic.pause(50)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (time > 0) {
        basic.showString("GO")
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
    go = time
    time = 0
})
function SongB () {
    basic.clearScreen()
    F()
    music.playTone(349, music.beat(BeatFraction.Half))
    basic.pause(50)
    F()
    music.playTone(349, music.beat(BeatFraction.Half))
    basic.pause(50)
    DE()
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(50)
    DE()
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(50)
    C()
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.pause(50)
    C()
    music.playTone(294, music.beat(BeatFraction.Quarter))
    basic.pause(50)
    C()
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(50)
}
function SongC () {
    basic.clearScreen()
    GA()
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(50)
    GA()
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(50)
    F()
    music.playTone(349, music.beat(BeatFraction.Half))
    basic.pause(50)
    F()
    music.playTone(349, music.beat(BeatFraction.Half))
    basic.pause(50)
    DE()
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(50)
    DE()
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(50)
    C()
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.pause(50)
}
function C () {
    led.plot(0, 4)
    led.plot(2, 4)
    led.plot(4, 4)
    basic.pause(100)
    basic.clearScreen()
}
function GA () {
    Y = 4
    for (let index = 0; index < 4; index++) {
        led.plot(0, Y)
        led.plot(2, Y)
        led.plot(4, Y)
        Y = Y - 1
        basic.pause(25)
    }
    basic.clearScreen()
}
let go = 0
let Y = 0
let time = 0
time = 0
basic.forever(function () {
    if (go > 0) {
        basic.showNumber(go)
        basic.showIcon(IconNames.EighthNote)
        songA()
        danceA()
        SongB()
        danceA()
        SongC()
        danceA()
        SongC()
        danceA()
        songA()
        danceA()
        SongB()
        danceA()
        go = go - 1
        if (go == 0) {
            music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
            basic.showIcon(IconNames.Heart)
        }
    }
})
