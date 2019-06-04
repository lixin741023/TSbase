// 抽象类 是做为其它派生类的基类使用。
// 它们一般不会直接被实例化。
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
// 抽象类 与 接口 的区别：
// <|
// 接口大概指明类类的一些规则，
// 而抽象类的作用也是一样，但是更多的是包含了类成员的实现细节。
//
// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
var StudentMock = /** @class */ (function () {
    function StudentMock(name) {
        this.name = name;
    }
    StudentMock.prototype.say = function () {
        console.log('saying……');
    };
    return StudentMock;
}());
// @ts-ignore
var she = new StudentMock();
// <|
// StudentMock 是个抽象类，不可以用它来实例化具体的对象。
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    Student.prototype.active = function () {
        console.log('active……');
    };
    Student.prototype["do"] = function () {
        console.log('doing……');
    };
    return Student;
}(StudentMock));
var me; // #2-1
me = new Student('lx');
// @ts-ignore
me["do"](); // #2-2
// #1-1 抽象类中定通过 abstract 定义来1个抽象方法，
// #1-2 那么在派生类中，就必须实现该方法！
// <|否则会有报错。
// #2-1 创建一个对抽象类型的引用，
// #2-2 方法在声明的抽象类中不存在，调用的话会报错。
