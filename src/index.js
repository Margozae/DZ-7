function padString (startSting, requiredLength, secondaryString = ' ') {
    let mainLine = startSting;
    const extraLength = Math.abs(requiredLength - startSting.length);
    const repeatingString = secondaryString.repeat(extraLength);
    if (startSting.length === requiredLength || startSting.length > requiredLength ) {
        return startSting;
    } else {
        for(let i = 0; i < extraLength; i++) {
            mainLine += repeatingString[i];
        }
    }
    return mainLine;
}

let result = padString('wasd', 24, 'qer'); // eslint-disable-line 
