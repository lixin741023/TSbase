// 构造函数：

// 1、当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。
// 首先就是类的 实例的类型。
class Student {
  constructor(
    public name,
    public level
  ) {}
}

let student: Student;
// <|上面的意思是：Student类的实例的 类型 是: Student

student = new Student('lx', '3');


let StudentA: typeof Student = Student;
// <|解析：
// 变量StudentA 保存了这个类、或者说保存了这个类的 构造函数。
// 然后

let me = new StudentA('lx', '3');

