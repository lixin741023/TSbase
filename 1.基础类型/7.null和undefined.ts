// null类型 和 undefined类型

// ***
// 默认情况下 null 和 undefined 是所有类型的子类型,
// 所有你可以把 null 和 undefined 赋值给许多其他类型的变量。
// 比如：
let str: string = null || undefined;

let num: number = null || undefined || 123;

let vo: void = null || undefined;

// <|但是这样的机制会导致一些问题，
// 但是我们可以通过指定 --strictNullChecks标记 来取消这种机制：

// 当你指定了--strictNullChecks标记，null 和 undefined 只能赋值给 void 和它们各自。

