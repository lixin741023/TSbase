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
    function HighStudent(name, level, inSchool, work) {
        var _this = _super.call(this, name, level, inSchool) || this;
        _this.work = work;
        if (_this.work) {
            console.log('I have worked three years');
        }
        return _this;
    }
    return HighStudent;
}(Student));
var me = new HighStudent('lx', '3', true, true);
console.log(me);
