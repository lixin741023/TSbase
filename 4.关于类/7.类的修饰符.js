// readonly 修饰符
var Student = /** @class */ (function () {
    function Student(name, level, sex) {
        this.name = name;
        this.level = level;
        this.sex = sex;
        this.inSchool = true;
    }
    return Student;
}());
var me = new Student('lx', '3', 'boy');
console.log(me);
// Student {name: 'lx', level: '3', sex: 'boy', inSchool: true}
// @ts-ignore
me.sex = 'girl';
// <|
// readonly 修饰的属性，不可以更改哟～
