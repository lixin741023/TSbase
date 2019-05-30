// 接口 能够描述JavaScript中对象拥有的各种各样的外形。
// 除了描述带有属性的 普通对象 外，接口也可以描述 函数类型。

// 为了使用接口表示函数类型，
// 我们需要给接口定义一个 调用签名。
// 它就像是一个只有 参数列表 和 返回值类型 的函数定义。
// 参数列表里的每个参数都需要指定 名字 和 类型。

// 例1：
interface SomeFunc {
  (paramsA: string, paramsB: number): number
}

let f1: SomeFunc;

f1 = function (a, b) {
  return 1
};


// 函数的 参数名 不需要和 接口中定义的名字匹配，
// <|但是，
// 位置需要相互对应哦！


// 例2：
interface objFunc {
  active: (paramsA: string, paramsB: string) => number
}

let obj: objFunc = {
  active: (a, b) => 1
};


