// 类的定义会创建两个东西：类的实例类型和一个构造函数。
// 因为类可以创建出 类型，所以你能够在允许使用 接口 的地方使用 类。

class Student {
  name: string;
  level: string;
}

interface StudentRules extends Student {
  inSchool: boolean
}

let ZZZ: StudentRules = {
  name: 'lx',
  level: '3',
  inSchool: false
}

