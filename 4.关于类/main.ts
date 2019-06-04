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
// 这个类有 4个 成员，
// <|
// 1个构造函数
// 1个 name 成员
// 1个 level 成员
// 1个 inSchool 成员
