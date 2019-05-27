// readonly 修饰符

// readonly 将属性设置为只读的。
// 只读属性必须在 声明时 或 构造函数里被初始化。

interface StudentRules {
  name: string,
  level: string,
  sex: any
}

class Student implements StudentRules {
  readonly inSchool = true; // #1
  constructor (
    public name,
    public level,
    readonly sex
  ) {

  }
}

let me = new Student('lx', '3', 'boy');

console.log(me);
// Student {name: 'lx', level: '3', sex: 'boy', inSchool: true}

// @ts-ignore
me.sex = 'girl';
// <|
// readonly 修饰的属性，不可以更改哟～
