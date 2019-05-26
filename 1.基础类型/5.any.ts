// any类型

// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
// 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
// 这种情况下，我们不希望 类型检查器 对这些值进行检查而是直接让它们通过编译阶段的检查。

let a: any = 'fds';

let b: any = 123;

let list1: any[] = [1, '2', true];

let list2: Array<any> = [true, {}, 0, '1'];
