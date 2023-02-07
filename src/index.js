module.exports = function toReadable (number) {
  let ones = ['', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundreds  = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];


  if (number < 20) {
    return ones[number + 1];
  } else if (number < 100 && Number(number.toString().slice(1)) === 0) {
    return (tens[number.toString().slice(0,1)] + ' ' + ones[Number(number.toString().slice(1))]).slice(0, -1);
  } else if (number < 100 && Number(number.toString().slice(1)) !== 0) {
    return tens[number.toString().slice(0,1)] + ' ' + ones[Number(number.toString().slice(1)) + 1];
} else if (number < 1000 && Number(number.toString().slice(1)) === 0) {
    return (hundreds[number.toString().slice(0,1)]);
  } else if (number < 1000 && Number(number.toString().slice(1)) < 20) {
    return (hundreds[number.toString().slice(0,1)] + ' ' + ones[Number(number.toString().slice(1)) + 1]);
  
  } else if (number < 1000 && Number(number.toString().slice(2)) === 0) {
    return (hundreds[number.toString().slice(0,1)] + ' ' + tens[number.toString().slice(1,2)] + ' ' + ones[Number(number.toString().slice(2))]).slice(0, -1);
  
  } else if (number < 1000 && Number(number.toString().slice(2)) !== 0) {
    return hundreds[number.toString().slice(0,1)] + ' ' + tens[number.toString().slice(1,2)] + ' ' + ones[Number(number.toString().slice(2)) + 1];
  
} 
}




console.log(module.exports(70))
console.log(module.exports(75))
console.log(module.exports(100))
console.log(module.exports(200))
console.log(module.exports(530))
console.log(module.exports(117))
console.log(module.exports(708))
console.log(module.exports(810))