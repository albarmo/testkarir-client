let a = 0;
let b = 0;
let c = 0;
let d = 0;

const resultDummy = [
  ["A", "C", "A", "B"],
  ["C", "B", "A", "D"],
  ["D", "C", "A", "B"],
  ["C", "B", "A", "D"],
  ["C", "D", "A", "B"],
];
let questAlpha = ["A", "B", "C", "D"];

function getMax() {
  let valueArr = [];
  valueArr.push(a, b, c, d);
  let max = "";
  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] > valueArr[i + 1]) {
      max = valueArr.indexOf(valueArr[i]);
    }
  }
  let result = questAlpha[max];
  result === undefined
    ? (result = "invalid value!")
    : (result = questAlpha[max]);
  console.log(`Final Result is => ${result}`);
  return result;
}

export const getRankRestult = (answer) => {
  let score = 5;
  console.log("-------- Helpers Get Rank Result ---------");
  console.log(" ===> answer ByAlpha <=== ");
  // console.log(answer);
  console.log("\n");
  // aksaes index 0 dari array result
  for (let i = 0; i < questAlpha.length; i++) {
    score--;
    // console.log(`-------------- iterasi ke -${i + 1}-----------------`);
    // console.log(score, ">> current Score");
    for (let j = 0; j < answer.length; j++) {
      let temp = "";
      // console.log(answer[j][i]);
      for (let alpha = 0; alpha < questAlpha.length; alpha++) {
        // console.log(answer[j][i], questAlpha[alpha], "<< Alpha");
        if (answer[j][i] === questAlpha[alpha]) {
          temp = answer[j][i];
          // console.log(temp);
          switch (temp) {
            case "A":
              a += score;
              break;
            case "B":
              b += score;
              break;
            case "C":
              c += score;
              break;
            case "D":
              d += score;
              break;
            default:
              console.log(`invalid value`);
          }
        }
      }
    }
  }
  console.log(" ===> Score ByAlpha <=== ");
  console.log(`A : ${a} B : ${b} C : ${c} D : ${d}`);
  let result = getMax();
  return result;
};
