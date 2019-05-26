// 接口的只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值，
// 我们可以在属性名前加 readonly 来指定为只读属性。

interface Params {
  readonly name: string,
  year: number,
  active?: any
}

let me: Params = {
  name: 'lx',
  year: 25
};

// TS 有1个 ReadonlyArray<T>类型，用以确保数组创建后不会再改变。
let arr: ReadonlyArray<string> = [
  'a', 'b', 'c', 'd'
];


// 区分什么时候用 const ？什么时候用 readonly ？
// |>
// 变量 const
// 属性 readonly
