  /* count the words in the input string */
module.exports = function (str) {
    // not string conditions 
  if (typeof str == 'number') {
    return 'type error';
  } 
  else if (!str) {
    return 'invalid';
  } 
  else if (str == ' ') {
    return 'invalid';
  } 
  else if (str == undefined) {
    return 'type error'
  }
  // its a string, split and compare.
  else {
    let stringsplit = str.split(' ');
    let word_count = {};  // to store the count.
    for (let loop1 = 0; loop1 < stringsplit.length; loop1++) {
      let counter = 0;
      for (let loop2 = 0; loop2 < stringsplit.length; loop2++) {
        if (stringsplit[loop1] === stringsplit[loop2]) {
          counter++; 
        }
      }
      word_count[stringsplit[loop1]] = counter;
    }
    return JSON.stringify(word_count);
  }
}