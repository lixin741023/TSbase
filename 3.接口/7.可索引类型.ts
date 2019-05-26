// 与使用接口描述函数类型差不多，
// 我们也可以描述那些能够通过 索引得到 的类型，
// 比如 a[10] 或 ageMap["daniel"] 等。


// 可索引类型具有一个 索引签名，
// 它描述了 对象索引的类型，还有相应的 索引返回值类型。

interface StringArray {
  [index: number]: string
}

let arr1: StringArray = [
  'a', 'b', 'c'
];


interface NumberArray {
  [index: number]: number
}

let arr2: NumberArray = [
  1, 2, 3, 4, 5
];

// 可以通过 readonly 将索引签名设置为只读，这样就防止了给索引赋值：
interface StringString {
  readonly [index: string]: string
}

let arr3: StringString = {
  'a': 'stringText',
  'b': 'stringText',
  'c': 'stringText',
};


