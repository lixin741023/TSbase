// 在TS中，类的成员都 默认 为是 public

// public 修饰的成员 对外是可见的。
// private 修饰的成员 对外不可见，只可以在 类的内部 访问。

interface StudentRules {
  name: string,
  level: string
}

class Student implements StudentRules {
  private money;
  constructor (
    public name,
    public level,
    param
  ) {
    this.money = param;
  }
}

let me = new Student('lx', '3', 256);

// @ts-ignore
console.log(me.money);
// <|
// 这里的 money 属性 属于Student类的 私有属性，
// 它就不能在声明它的类的 外部 访问。

