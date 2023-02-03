function findMissingNumbers(numArr) {
  let minNum = Math.min(...numArr);
  let maxNUm = Math.max(...numArr);
  let allNumberInRange = [];

  for (let i = minNum; i <= maxNUm; i++) {
    allNumberInRange.push(i);
  }

  let missingNums = allNumberInRange.filter((num) => !numArr.includes(num));
  return missingNums;
}

console.log(findMissingNumbers([0, 1, 2, 5, 14, 17, 18, 19, 20]));
