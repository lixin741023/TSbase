// 在TypeScript里，我们可以使用常用的面向对象模式。
// 基于类的程序设计中一种最基本的模式是允许使用 继承 来扩展现有的 类。

interface StudentRules {
  name: string,
  level: string,
  inSchool: boolean
}

class Student implements StudentRules {
  constructor (
    public name,
    public level,
    public inSchool
  ) {}
}

class HighStudent extends Student implements StudentRules {
  constructor (
    name, level, inSchool,
    public work: boolean
  ) {
    super(name, level, inSchool)
  }
}


let me = new HighStudent('lx', '3', false, true);

console.log(me);

// HighStudent 是一个派生类，
// 它派生自 Student 基类。

// 派生类 我们一般称为 子类，
// 基类 通常称之为 超类。
