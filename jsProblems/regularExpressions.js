// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec


var myRe = /ab*/g;
var str = 'abbcdefabh';
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
}


/* Regular Expressions Tips
[] : used when finding a single character
[^] ; used when excluding characters within brackets
() : groups together the expressions within


*/
