// null类型 和 undefined类型
// ***
// 默认情况下 null 和 undefined 是所有类型的子类型,
// 所有你可以把 null 和 undefined 赋值给许多其他类型的变量。
// 比如：
var str = null || undefined;
var num = null || undefined || 123;
console.log(num);
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
