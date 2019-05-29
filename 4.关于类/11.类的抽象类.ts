// 抽象类 是做为其它派生类的基类使用。
// 它们一般不会直接被实例化。

// 抽象类 与 接口 的区别：
// <|
// 接口大概指明类类的一些规则，
// 而抽象类的作用也是一样，但是更多的是包含了类成员的实现细节。
//

// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

abstract class StudentMock {
  constructor (
    public name
  ) {}

  abstract active(): void // #1-1

  say () {
    console.log('saying……')
  }
}

// @ts-ignore
let she = new StudentMock();
// <|
// StudentMock 是个抽象类，不可以用它来实例化具体的对象。

class Student extends StudentMock {
  constructor (name) {
    super(name)
  }
  active(): void { // #1-2
    console.log('active……')
  }

  do (): void {
    console.log('doing……');
  }
}

let me: StudentMock; // #2-1
me = new Student('lx');

// @ts-ignore
me.do(); // #2-2

// #1-1 抽象类中定通过 abstract 定义来1个抽象方法，
// #1-2 那么在派生类中，就必须实现该方法！
// <|否则会有报错。


// #2-1 创建一个对抽象类型的引用，
// #2-2 方法在声明的抽象类中不存在，调用的话会报错。




