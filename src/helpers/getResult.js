var dummyArr = [1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6];
let dummyOutput = [
  {
    id: 1,
    title: "Konvensional",
    description: "anda adalah seorang konvensional",
  },
  {
    id: 2,
    title: "Sosial",
    description: "anda adalah seorang Sosial",
  },
  {
    id: 3,
    title: "Infestigatif",
    description: "anda adalah seorang Infestigatif",
  },
  {
    id: 4,
    title: "Artistik",
    description: "anda adalah seorang Artistik",
  },
  {
    id: 5,
    title: "Realistik",
    description: "anda adalah seorang Realistik",
  },
  {
    id: 6,
    title: "Entreprising",
    description: "anda adalah seorang Entreprising",
  },
];

export const getResult = (answerData) => {
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

  console.log(newArr);
  let output = newArr.indexOf(max);
  console.log(`nilai terbesar adalah : ${max}`);
  console.log(`nilai terbesar ada di index ke-${output + 1}`);
  return dummyOutput[output];
};

// console.log(getResult(dummyArr));
