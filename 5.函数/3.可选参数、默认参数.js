// TS 里的每个函数参数都是必须的。
// 这不是指不能传递 null 或 undefined 作为参数，而是说编译器检查用户是否为每个参数都传入了值。
// 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
// <|
// 如果一个函数有的参数是可选的，那么在TS中可以使用 ？ 来表示该参数为可选参数：
function func(paramsA, paramsB, paramsC) {
}
func(1, 2);
// <|这里有个硬性规则，可选参数必须放在最后面。
// 默认参数
// <|我们也可以为参数提供一个默认值
// 当用户没有传递这个参数 或 传递的值是undefined时，默认值就会生效。
// params === undefined && 默认值生效。
// 它们叫做有默认初始化值的参数。
function funct(paramsA, paramsB, paramsC) {
    if (paramsB === void 0) { paramsB = 21; }
    if (paramsC === void 0) { paramsC = '默认'; }
    return paramsA + paramsB + paramsC;
}
console.log(funct(1));
// 
