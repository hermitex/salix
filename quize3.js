function findDuplicates(strArr) {
  let hasDuplicates = new Set(strArr);
  if (hasDuplicates.size !== strArr.length) {
    const duplicates = {};
    for (const el of strArr) {
      if (duplicates.hasOwnProperty(el)) {
        duplicates[el] += 1;
      } else {
        duplicates[el] = 1;
      }
    }
    return Object.keys(duplicates).filter((key) => duplicates[key] > 1);
  } else {
    return "No duplicates";
  }
}
console.log(findDuplicates(["a", "b", "c", "b", "f", "f", "g", "a", "d"]));
