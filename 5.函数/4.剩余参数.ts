// 普通必传参数 和 默认参数 都有1个共同点，他们都只代表了1个实参数。

// 但是有时候，
// <|我们的函数并不知道将会有多少个参数传递过来，或者是当我们想处理多个参数的时候，应该怎么做？？

// 在JS中，我们可以使用 arguments 来访问所有传入的参数。
// 在TS中，我们可以使用 剩余参数，...把所有的参数收集到1个变量中。

function f3(
  firstName: string,
  ...lastName: Array<string>
) {
  console.log(lastName)
}

f3('1', 'a', 'b', 'c'); // ['a', 'b', 'c']
f3('1');// []
f3('1', undefined); // [undefined]
f3('1', null); // [null]
// <|
// <|剩余参数 只能位于末尾哦！
// <|剩余参数 只能是数组类型！
// <|剩余参数 会被当作个数不限的可选参数，可以1个也不传，也可以传很多。
// <|1个也不传的时候，他是一个空数组。

// 这个省略号也会在带有剩余参数的 函数类型 定义上使用到：
let fun: (paramA: string, ...params: any[]) => void = (x, y) => {};
let funC: (paramA: string, ...params: any[]) => void = f3;

