// 先来看例子：

interface Params {
  name: string,
  year: number
}

function f1(params: Params) {
  console.log(params)
}

let obj = {
  name: 'xl',
  year: 26,
  active: 'doing'
};

f1(obj);
// <|这里我们把 obj 作为参数，传入了 f1 函数中，
// 我们的 obj 对象相比较 Params接口 多了1个 active 属性，
// 但是这没有关系，
// 因为我们之前说过，我们只需要满足这个接口的 必要条件 即可。


// @ts-ignore
f1({name: 'lx', year: 25, active: 'do'});
// <|
// <|这里
// <|我们同样是用1个对象作为参数调用 f1 函数。
// 同样只是多了1个 active 属性，
// 但是这里接口却给我们报错了。
// why？？


// 解释：
// 因为第二种方式，对象字面量 的方式会被特殊对待，
// 在他们经过 赋值给变量，或 作为参数传递 的时候，需要经过 额外的属性检查，所以报错了。

// 如何绕开这个检查？？

// 方法1：
// 使用 类型断言
f1(
  {name: 'lx', year: 26, active: 'du'} as Params
);

// 方法2：（推荐）
// 使用 字符串索引签名。
// 前提是我们能够很明确的知道这个对象一定有一些因为其他特殊用途而存在的 额外属性，
// 比如：Paramss 接口上已经有了 name 属性，year 属性，
// <|但我们很确保在实际使用过程中，还会带有 任意数量 的 其它属性，
// <|那么我们可以这样定义它：

interface Paramss {
  name: string,
  year: number,
  [propName: string]: any
}
// 这里我们表示：Paramss 可以有任意数量的属性

function f2(params: Paramss) {
  console.log(params)
}

f2({name: 'lx', year: 25, active: 'just do'});
// <|现在，
// <|即使是以 字面量 的方式进行传参，在经过 额外的属性检查 时，也没有报错咯～



// todo 字面量？的定义？概念？ 字面量直观？？
