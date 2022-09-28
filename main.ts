let randomnumber = 0
basic.forever(function () {
    randomnumber = randint(5, 10)
    basic.showNumber(randomnumber)
    for (let index = 0; index <= randomnumber; index++) {
        basic.showNumber(index)
        for (let index2 = 0; index2 < index; index2++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
    }
    basic.showString("A buscar!!!")
    music.playMelody("E D G C C G D E ", 120)
})
