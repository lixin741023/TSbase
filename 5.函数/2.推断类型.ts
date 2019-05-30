// 如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。

let someFun: (paramsA: number, paramsB: any) => string = (x, y) => x+y;

console.log(someFun);


