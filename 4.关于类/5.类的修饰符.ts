// public 修饰的成员 对外是可见的。
// private 修饰的成员 对外不可见，只可以在 类的内部 访问。
// protected 修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。

interface StudentRules {
  name: string,
  level: string
}

class Student implements StudentRules {
  private money;
  protected speed;
  constructor(
    public name,
    public level,
    money,
    speed
  ) {
    this.money = money;
    this.speed = speed;
  }
}

class HighStudent extends Student {
  constructor (name, level, money, speed) {
    super(name, level, money, speed);
  }
  say () {
    console.log( `我跑得快： ${this.speed} KM/S。`); // #1
  }
}

let me = new HighStudent('lx', '3', 256, 1024);

me.say();


// #1 speed 是 Student类中被 protected修饰 的一个属性，
// <|我们可以在 它的子类中 通过 this.speed 调用到。
// <|
// 但是 money 就不可以，它是被 private修饰 的一个属性，
// 在子类中也无法通过 this.money 调用到。
