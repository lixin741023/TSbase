// 在TS中，类的成员都 默认 为是 public

// public 修饰的成员 对外是可见的。
// private 修饰的成员 对外不可见，只可以在 类的内部 访问。

interface StudentRoules {
  name: string,
  level: string
}

class Student implements StudentRoules {
  private money;
  constructor (
    public name,
    public level,
    param
  ) {
    this.money = param
  }
}

let me = new Student('lx', '3', 1024);

// todo ing
