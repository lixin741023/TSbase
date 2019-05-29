var Student = /** @class */ (function () {
    function Student(name, _level) {
        this.name = name;
        this._level = _level;
    }
    Object.defineProperty(Student.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var me = new Student('lx', '3');
me.level = '4';

console.log(me)
