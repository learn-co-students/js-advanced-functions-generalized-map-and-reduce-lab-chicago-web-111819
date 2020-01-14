
function map(srcArray, fn) {
  let resultingArray = [];

  for (let i = 0; i < srcArray.length; i++) {
    resultingArray.push(fn(srcArray[i]));
  }

  return resultingArray;
}

function reduce(srcArray, fn, startingValue) {
  let endResult = startingValue || srcArray[0];
  let i = startingValue ? 0 : 1;

  for (i; i < srcArray.length; i++) {
    endResult = fn(srcArray[i], endResult);
  }

  return endResult;
}