// 直接上例子吧：

interface StudentRules {
  name: string,
  level: string,
  inSchool: boolean
}

class Student implements StudentRules {
  constructor (
    public name,
    public level
  ) {}
  inSchool = true
}

// 我们创建了1个 Student 类，
// 这个类有 2个 成员，
// <|
// 1个 inSchool 属性
// 1个 构造函数
