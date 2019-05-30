// 函数的类型分为：
// <|参数类型
// <|返回值类型
function fun(x, y) {
    return x + y;
}
// <|
// TS能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
// 如何书写完整的函数类型？
var someFun = function (x, y) {
    return x;
};
console.log(someFun);
console.log(someFun(1, 2));
