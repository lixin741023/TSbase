// 元组类型 （Tuple）

// 元组类型 允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

// Declare a tuple type
let x: [string, number, boolean];


x = [
  'lx',
  26,
  true
];



// 当访问一个越界的元素，会使用 联合类型 替代。
// 高级主题：联合类型。
