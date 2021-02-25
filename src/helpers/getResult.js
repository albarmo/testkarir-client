export const getResult = (answerData, outputOrder) => {
  const outputList = [];
  outputList.push(outputOrder);
  let sortedArr = answerData.sort();
  let newArr = [];
  let count = 0;
  for (let i = 0; i <= sortedArr.length; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      count++;
    } else if (sortedArr[i] != sortedArr[i + 1]) {
      newArr.push(count + 1);
      count = 0;
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (i == 0) {
      var max = newArr[i];
    } else {
      if (newArr[i] > max) {
        max = newArr[i];
      }
    }
  }

  // console.log(newArr);
  let output = newArr.indexOf(max);
  // console.log(`nilai terbesar adalah : ${max}`);
  // console.log(`nilai terbesar ada di index ke-${output + 1}`);
  return outputOrder[output];
};
