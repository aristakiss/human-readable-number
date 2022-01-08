module.exports = function toReadable (number) {
    let stringNumber = '';
    let firstTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let secondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let setTen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let truncNumber = Math.trunc(number / 100);
    let fractionPartNumber = number % 100;
    let truncFractionPartNumber = Math.trunc(fractionPartNumber / 10);
    let fractionFractionPartNumber = fractionPartNumber % 10;
    if (number >= 100) {
      if (fractionPartNumber > 0) {
      stringNumber = firstTen[truncNumber] + ' hundred '; 
      }
      else {
        return firstTen[truncNumber] + ' hundred';
      }
    }
    if (fractionPartNumber >= 20) {
      stringNumber += fractionFractionPartNumber ? setTen[truncFractionPartNumber] + ' ' + firstTen[fractionFractionPartNumber] : setTen[truncFractionPartNumber];
    }
    else {
      stringNumber += (fractionPartNumber < 10) ? firstTen[fractionPartNumber] : secondTen[fractionPartNumber - 10];
    }
    return stringNumber;
  }

