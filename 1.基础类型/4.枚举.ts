// 枚举类型 （enum）

// enum类型 是对JavaScript标准数据类型的一个补充。
// 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

enum Weapon {
  AWM,
  M762,
  P1911
}
console.log(typeof Weapon); // object
console.log(Weapon);
// <|{'0': 'AWM', '1': 'M762', '2': 'P1911', AWM: 0, M762: 1, P1911: 2}
// <|默认从下标 0 开始

let a = Weapon.AWM;

console.log(typeof a); // number
console.log(a); // 0


enum Car {
  '摩托车' = 1, // 这里把修改下表默认从 1 开始
  '三轮车',
  '跑车' = 99
}

console.log(Car);
// <|{'1': '摩托车'， '2'：'三轮车', '99': '跑车', '摩托车': 1, '三轮车': 2, '跑车': 99}

console.log(typeof Car.三轮车);
// <|number
console.log(Car.三轮车);
// <|2

console.log(
  Car[2]
);
