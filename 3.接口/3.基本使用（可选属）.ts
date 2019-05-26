// 接口的可选属性
// <|多加1个 问号（?）……

interface Params {
  name: string,
  year?: number
}

function f3(params: Params) {
  console.log(params);
}

let obj = {
  name: 'lx'
};

f3(obj);
