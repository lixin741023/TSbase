// 在TS中，类的成员都 默认 为是 public
var Student = /** @class */ (function () {
    function Student(name, level, param) {
        this.name = name;
        this.level = level;
        this.money = param;
    }
    return Student;
}());
var me = new Student('lx', '3', 256);
// @ts-ignore
console.log(me.money);
// <|
// 这里的 money 属性 属于Student类的 私有属性，
// 它就不能在声明它的类的 外部 访问。
