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
// 然后 typeof Student 的意思是:
// <|变量StudentA 的类型是 Student类的类型，而不是 Student类 实例的类型。
// <|也可以说："告诉我 Student标识符的类型"，也就是 构造函数 的类型。


let me = new StudentA('lx', '3');

// 然后，我们同样是可以使用 StudentA 来实例化 1个对象。

