// 函数的类型由2部分组成：

// <|参数类型
// <|返回值类型


function fun(x: number, y: number) {
  return x + y
}
// <|
// TS能够根据返回语句自动推断出返回值类型，因此我们通常省略它。


// 如何书写完整的函数类型？
// 例1：
let someFun1: (paramsA: number, paramsB: number) => number = function (x, y) {
  return x + y
};
// <|
// 当我们在书写完整的函数类型时，不能够省略 返回值类型，
// 如果该函数真的没有返回值类型，我们也必须要使用 void。
// |>
// 再来1个例子：
let someFun2: (paramsA: number, paramsB: number) => void = (x, y) => x + y;

// 在书写 完成的函数类型 的时候，用到了 =>，
// 需要注意和箭头函数中的 => 分开看，和区分。




// 函数的类型只是由 参数类型 和 返回值 组成的。 函数中使用的捕获变量不会体现在类型里。
// 实际上，这些变量是函数的隐藏状态并不是组成API的一部分。
