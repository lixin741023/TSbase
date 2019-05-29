// 参数属性：
// <|概念：

// 参数属性 可以方便地让我们在一个地方 定义 并 初始化 一个类的成员。

// 参数属性使用方法：
// 通过给 构造函数的参数 前面添加一个访问限定符（修饰符）来声明。
// 使用 readonly、private、public、protected 会声明并初始化一个类的成员。

interface StudentRules {
  name: string,
}

class Student implements StudentRules {
  constructor (
    public name,
    readonly sex,
    private money,
    protected inSchool
  ) {

  }
}

let me = new Student('lx', 'boy', 256, true);
console.log(me);
// <|
// Student{name: 'lx', sex: 'boy', money: 256, inSchool: true}

// 这里我们定义类4个 参数属性，
// 同时给这个类初始化类4个成员。
