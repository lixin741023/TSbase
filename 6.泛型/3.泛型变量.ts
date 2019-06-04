// 泛 型 变 量

function f1<T>(params: T): T {
  // @ts-ignore
  let a = params.length;
  return params
}

// 这里想要去取 params的length 是不对的，
// 因为有可能 params的类型 不是 String 或者 Array等具有 length 属性的类型。
// <|
// 我们可以：

function f2<T>(params: Array<T>): T[] {
  let a = params.length;
  return params
}

// 只看代码，我们可以得知：
// 函数f2 可以接收1个类型，可以是 String、Number、Boolean……
// 这个类型由 类型变量T 来标记。
// 函数接收1个参数，这个参数是1个数组，数组里的成员的类型必须和给定的类型是一样的。
// 函数的返回值是：
// 数组，数组里的成员类型和给定的类型是一样的。

