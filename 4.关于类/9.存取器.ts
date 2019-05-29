interface StudentRules {
  name: string,
  _level: string
}

class Student implements StudentRules {
  constructor (
    public name,
    public _level
  ) {}
  get level() {
    return this._level
  }
  set level(value) {
    this._level = value
  }
}

let me = new Student('lx', '3');

me.level = '4';

// Student{name: 'lx', _level: '4' }
