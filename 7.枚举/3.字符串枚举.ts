// 字符串枚举中：每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。

// 字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。

enum P1 {
  name = 'lx',
  year = '93',
  sex = 'boy',
  inSchool = 'not'
}

console.log(P1);
// {name: 'lx', year: '93', sex: 'boy', inSchool: 'not'}


