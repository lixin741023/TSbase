// 构造函数也可以被标记成 protected。
// 这意味着这个类不能在包含它的类外被实例化，但是能被继承。


class Student {
  protected constructor () {}
}

// @ts-ignore
let she = new Student();
// <|
// 这里就会报错，无法通过 Student类 实例化。



class HighStudent extends Student {
  constructor () {
    super()
  }
}

let me = new HighStudent();


// 通过这个特性，
// 我们可以写出 只能够通过继承，无法独立使用的 类。
