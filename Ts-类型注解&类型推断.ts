// 类型注解 type annotation
// 其实就是绑定静态类型, 如下例意思是显示的告诉代码，count变量就是一个数字类型
const count: number = 5;

// 类型推断 type inferrence
// 鼠标移动到变量上,我们发现 count1 类型被标注为了number
// 即 TS 代码能自动尝试分析变量的类型,并将该静态类型自动绑定到变量上
let count1 = 123;

// ======

// 如果 TS 能够自动分析变量类型,则不需要手动类型注解
// 如果 TS 无法分析变量类型的话,我们就需要使用类型注解
const one = 1;
const two = 2;
const three = one + two; // one, two, three 都能被类型推断出来,因此不需要注解

function add(one, two) {
  // 此时函数内形参类型为 any, ts 无法推断形参类型,因此需要类型注解
  return one + two;
}
const thr = add(1, 'aaa'); // 不报错

function add2(one: number, two: number) {
  return one + two;
}
// const thr2 = add2(1,'aaa'); // 报错,不能传入字符串
const thr2 = add2(1, 2); // 不需要类型注解,此处 ts 能自己推断

// ======

// 类型推断同样适用于对象嵌套
// 鼠标移至 phone 上即可查看 ts 类型推断结果
const phone = {
  name: '手机',
  type: [
    { logo: 'Xiaomi', price: 2000 },
    { logo: 'Huawei', price: 5000 },
  ]
}