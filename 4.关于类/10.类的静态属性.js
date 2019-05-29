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
        Student.active();
        console.log(Student.x);
    };
    Student.active = function () {
        console.log('do someThing……');
    };
    Student.x = 'xxx';
    return Student;
}());
var me = new Student('lx', '3');
// Student{name: 'lx', level: '3'}
me.say();
