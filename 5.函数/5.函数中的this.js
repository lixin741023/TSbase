var _this = this;
// 在 JS 中，this 只有在函数被调用的时候才会知道是谁,
// 虽然这很灵活，但有可能会有一些问题，
// |>
var obj1 = {
    name: 'me',
    active: function () {
        // console.log(this)
    }
};
obj1.active(); // obj1
var fun1 = obj1.active;
fun1(); // window || global || undefined
// 为了避免这样的问题，我们需要在函数被返回时就绑好正确的 this，
// 这样的话无论之后怎么样调用函数 this 都不会变。
// 箭头函数能保存函数创建时的 this值，而不是调用时的值：
var obj2 = {
    name: 'me',
    active: function () {
        console.log(_this);
    }
};
obj2.active(); // obj2
var fun2 = obj2.active;
fun2();
