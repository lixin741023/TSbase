class Student {
 constructor (
   public name,
   public level,
   public inSchool
 ) {}
}

class HighStudent extends Student {
  constructor (
    name, level, inSchool,
    public work
  ) {
    super(name, level, inSchool); // #1
    if (this.work) {
      console.log('I have worked three years');
    }
  }
}



let me = new HighStudent('lx', '3', true, true);

console.log(me);

// #1 派生类 包含类1个构造函数，它就必要要在构造函数中 调用 1次 super
// <|super 会执行 基类的 构造函数，
// <|在 派生类 的构造函数中使用 this 之前，一定要 必须要 调用一次 super，
// <|因为只有调用了 super， 才能确定 正确的 this。
//
