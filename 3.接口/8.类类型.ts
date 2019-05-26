// 与C#或Java里接口的基本作用一样，
// TypeScript也能够用它来明确的强制一个 类 去符合 某种契约。

interface PersonRules {
  name: string,
  year: number
}

class Student implements PersonRules {
  constructor (
    public name,
    public year,
    public born
  ) {

  }
}

let me = new Student('lx', 26, '1993');

