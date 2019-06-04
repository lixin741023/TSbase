// 数字枚举

enum P1 {
  name,
  year,
  sex,
  inSchool
}

console.log(P1);
// {'0': 'name', '1': 'year', '2': 'sex', '3': 'inSchool', name: 0, year: 1, sex: 2, inSchool: 3}

console.log(P1[2]); // sex
console.log(P1['2']); // sex

console.log(typeof P1.inSchool); // number
console.log(P1.inSchool); // 3
