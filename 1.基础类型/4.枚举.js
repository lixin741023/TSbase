// 枚举类型 （enum）
// enum类型 是对JavaScript标准数据类型的一个补充。
// 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Weapon;
(function (Weapon) {
    Weapon[Weapon["AWM"] = 0] = "AWM";
    Weapon[Weapon["M762"] = 1] = "M762";
    Weapon[Weapon["P1911"] = 2] = "P1911";
})(Weapon || (Weapon = {}));
console.log(typeof Weapon); // object
console.log(Weapon);
// <|{'0': 'AWM', '1': 'M762', '2': 'P1911', AWM: 0, M762: 1, P1911: 2}
// <|默认从下标 0 开始
var a = Weapon.AWM;
console.log(typeof a); // number
console.log(a); // 0
var Car;
(function (Car) {
    Car[Car["\u6469\u6258\u8F66"] = 1] = "\u6469\u6258\u8F66";
    Car[Car["\u4E09\u8F6E\u8F66"] = 2] = "\u4E09\u8F6E\u8F66";
    Car[Car["\u8DD1\u8F66"] = 99] = "\u8DD1\u8F66";
})(Car || (Car = {}));
console.log(Car);
// <|{'1': '摩托车'， '2'：'三轮车', '99': '跑车', '摩托车': 1, '三轮车': 2, '跑车': 99}
console.log(typeof Car.三轮车);
console.log(Car.三轮车);
// <|2
console.log(Car[2]);
