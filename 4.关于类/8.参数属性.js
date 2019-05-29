// 参数属性：
// <|概念：
var Student = /** @class */ (function () {
    function Student(name, sex, money, inSchool) {
        this.name = name;
        this.sex = sex;
        this.money = money;
        this.inSchool = inSchool;
    }
    return Student;
}());
var me = new Student('lx', 'boy', 256, true);
console.log(me);
// <|
// Student{name: 'lx', level: '3', inSchool: true}
// 这里我们定义类3个 参数属性，
// 同时给这个类初始化类3个成员。
