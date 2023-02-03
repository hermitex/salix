// Write a program to reverse a given string. For example, if we pass the word 'john', the program should return the word 'nhoj'.

function reverseString(str) {
  let reversedStr = "";
  if (str.length) {
    if (str.length === 1) {
      return str;
    } else {
      const strArr = str.split("");
      for (let i = strArr.length - 1; i >= 0; i--) {
        reversedStr += strArr[i];
      }
      return reversedStr;
    }
  }
}

console.log(reverseString("johnmomanyi"));
