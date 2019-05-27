// 在TypeScript里，我们可以使用常用的面向对象模式。
// 基于类的程序设计中一种最基本的模式是允许使用 继承 来扩展现有的 类。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, level, inSchool) {
        this.name = name;
        this.level = level;
        this.inSchool = inSchool;
    }
    return Student;
}());
var HighStudent = /** @class */ (function (_super) {
    __extends(HighStudent, _super);
    function HighStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HighStudent;
}(Student));
var me = new HighStudent('lx', '3', false);
console.log(me);
