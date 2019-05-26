// 断言的作用：
// 有时候，开发者 比 TS编译器 更了解某个值的详细信息，并且开发者需要这么去做。
// 这个时候，就可以使用断言，断言类似在告诉TS编译器："相信我，我知道自己在做什么"。
// 类型断言就好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
// 它没有运行时的影响，只是在编译阶段起作用。
// TS编译器 就会假设你，程序员，已经进行了必须的检查。
// 使用断言的方式：
// 第一种：
// "尖括号"语法：
var someValue = "this is a string";
var strLength = someValue.length;
var b = someValue.length;
console.log(typeof strLength);
console.log(strLength);
console.log(typeof b);
console.log(b);
