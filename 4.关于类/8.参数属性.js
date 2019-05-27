// 参数属性：
// <|概念：
var Student = /** @class */ (function () {
    function Student(name, level, inSchool) {
        this.name = name;
        this.level = level;
        this.inSchool = inSchool;
    }
    return Student;
}());
var me = new Student('lx', '3', true);
console.log(me);
