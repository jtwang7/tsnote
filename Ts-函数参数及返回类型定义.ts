// 函数参数类型定义
function add(one: number, two: number) {
  return one + two
}

// 上述函数没有定义返回值的类型
// 完整函数定义(参数类型 + 返回值类型)
function add2(one: number, two: number): number {
  return one + two
}
// 没有返回值的函数，可以给它类型注解 void
function sayHi(name: string):void {
  console.log(`Hi ${name}`);
}
// 函数报错,或者死循环;导致函数体永远执行不完时,返回值类型注解为 never
function throwError():never {
  throw new Error();
}

// ======

// 函数对象为参数时的类型注解
// 遵循对象注解的嵌套写法: 首先要注明该参数为对象类型,再对对象内属性做进一步注解
function sub({num1, num2}: {num1: number, num2:number}): number {
  return num2 - num1;
}

function show({name}: {name:string}): void {
  console.log(name);
}