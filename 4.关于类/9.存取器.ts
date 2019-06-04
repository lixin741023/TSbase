interface StudentRules {
  name: string,
  _level: string
}

class Student implements StudentRules {
  constructor (
    public name,
    public _level,
    public _sex
  ) {}
  get level() {
    return this._level
  }
  set level(value) {
    this._level = value
  }
  get sex () {
    return this._sex
  }
}

let me = new Student('lx', '3', 'boy');

me.level = '4';

// Student{name: 'lx', _level: '4', sex: 'boy'}

// @ts-ignore
me.sex = 'girl?';
// <|只带有 get 不带有 set 的存取器会被自动推断为 只读属性哦。
