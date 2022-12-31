radio.setGroup(1)

radio.onReceivedString(function(onReceivedString){
    if (onReceivedString == "M f"){
        pins.analogWritePin(AnalogPin.P1,0)
        pins.analogWritePin(AnalogPin.P2,700)
    }

    else if (onReceivedString == "M b"){
        pins.analogWritePin(AnalogPin.P2,0)
        pins.analogWritePin(AnalogPin.P1,750)
    }

    else if(onReceivedString == "Go Right"){ 
        pins.analogWritePin(AnalogPin.P1,0)
        pins.analogWritePin(AnalogPin.P2,800)
    }

    else if(onReceivedString == "Go Left"){
        pins.analogWritePin(AnalogPin.P2,0)
        pins.analogWritePin(AnalogPin.P1,850)
    }

    else if(onReceivedString == "A"){
        pins.analogWritePin(AnalogPin.P1,900)
        pins.analogWritePin(AnalogPin.P2,0)
    }

    else if(onReceivedString == "B"){
        pins.analogWritePin(AnalogPin.P2,950)
        pins.analogWritePin(AnalogPin.P1,0)
    }

    else if(onReceivedString == "Stop"){
        pins.analogWritePin(AnalogPin.P1,0)
        pins.analogWritePin(AnalogPin.P2,0)
    }
})
