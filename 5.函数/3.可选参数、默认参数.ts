// TS 里的每个函数参数都是必须的。
// 这不是指不能传递 null 或 undefined 作为参数，而是说编译器检查用户是否为每个参数都传入了值。


// 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
// <|
// 如果一个函数有的参数是可选的，那么在TS中可以使用 ？ 来表示该参数为可选参数：

function func(paramsA: number, paramsB: number, paramsC?: string): void {

}

func(1, 2);
// <|这里有个硬性规则，可选参数必须放在最后面。


// 默认参数
// <|我们也可以为参数提供一个默认值
// 当用户没有传递这个参数 或 传递的值是undefined时，默认值就会生效。
// params === undefined && 默认值生效。
// 它们叫做有默认初始化值的参数。

function funcA(paramsA: number, paramsB: number = 21, paramsC: string = '默认') {
  return paramsA + paramsB + paramsC
}

console.log(
  funcA(1)
);
// 普通必传参数 后面的 默认值参数，都具有 可选参数的性质，都是可选的。
// <|
// 但如果1个 默认值参数 后面还有 普通必传参数，那这个 默认值参数 则不具有可选的性质。


console.log(
  // @ts-ignore
  funcA(1, 123, 55)
);
// <|带有默认值的参数，要传参进去，也需要类型一样哦，否则TS编译器会报错。
