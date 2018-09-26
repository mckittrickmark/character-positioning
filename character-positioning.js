var args = process.argv.slice(2);
var lettersArray = args.join(" ");
console.log(lettersArray);

function countLetters(lettersArray) {
  var outputArray = [];
  var outputObject = {};

  for (var i = 0; i < lettersArray.length; i++) {
    var letter = lettersArray[i];
    if (!outputArray.includes(letter)){
      outputArray.push(letter);
      outputObject[letter] = [i];
    } else {
      outputObject[letter].push(i);
   }

  }
  return outputObject;
}
console.log(countLetters(lettersArray));