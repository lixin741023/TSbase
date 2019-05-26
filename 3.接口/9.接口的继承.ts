// 接口也是可以 继承的

interface CarFather {
  name: string,
  speed: number
}

interface CarChildren extends CarFather {
  width: number,
  height: number,
  fly?: boolean
}

let Chevrolet: CarFather = {
  name: '赛欧3',
  speed: 1000
};

let BMW: CarChildren = {
  name: 'X6',
  speed: 100,
  width: 10,
  height: 10,
  fly: false
};
