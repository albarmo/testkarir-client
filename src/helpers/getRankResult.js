let a = 0;
let b = 0;
let c = 0;
let d = 0;

let questAlpha = ["A", "B", "C", "D"];

function getMax() {
  let valueArr = [];
  valueArr.push(a, b, c, d);
  var min = Math.min(...valueArr);
  let maxIndex = valueArr.indexOf(min);
  let result = questAlpha[maxIndex];
  result === undefined
    ? (result = "invalid value!")
    : (result = questAlpha[maxIndex]);
  return result;
}

export const getRankRestult = (answer) => {
  a = 0;
  b = 0;
  c = 0;
  d = 0;

  let score = 0;
  // console.log("-------- Helpers Get Rank Result ---------");
  // console.log(" ===> answer ByAlpha <=== ");
  // console.log(answer);
  // console.log("\n");
  // aksaes index 0 dari array result
  for (let i = 0; i < questAlpha.length; i++) {
    score++;
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
