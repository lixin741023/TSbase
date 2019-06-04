// 类 的静态属性
// 到目前为止我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。
// 但是，
// 我们也可以创建 类的静态成员，这些 属性 存在于类本身上面而不是 类的实例 上。
var Student = /** @class */ (function () {
    function Student(name, level) {
        this.name = name;
        this.level = level;
    }
    Student.prototype.say = function () {
        console.log(this);
        Student.active();
        console.log(Student.x);
    };
    Student.active = function () {
        console.log(this);
        console.log('do someThing……');
    };
    Student.x = 'xxx';
    return Student;
}());
var me = new Student('lx', '3');
// Student{name: 'lx', level: '3'}
me.say();
// 类的静态成员 无法被实例使用，
// 类的静态成员 可以被派生类使用，
// 类的静态方法 中的this指向的是类本身，而不是类的实例。
