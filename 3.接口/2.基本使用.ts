function f1(params: {name: string, year: number}): void {
  console.log(params)
}

// 上述列子 用接口来表示

interface Params {
  name: string,
  year: number
}

function f2(params: Params): void {
  console.log(params)
}

let obj = {
  year: 26,
  name: 'lx',
  active: 'doing' // #1
};

f2(obj);

// Params接口 就好比一个名字，用来描述了1个 要求～
// 只要传给 函数f2 的参数 满足这个接口的 必要条件 即可，顺序可以不一样。

// #1 再次强调，满足 必要条件 即可，这里多传一个 active 是没有问题的，
// <|因为 Params 接口 并没有对 active这一属性作出任何规定。
