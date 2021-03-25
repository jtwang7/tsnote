let count: number = 1; // count 被定义为了 number 类型,且不可以改变
// count = 'jspang'; // 报错,因为 count 是 number 类型,不能赋值字符串
count.toFixed() // count 可以使用 number 类型的所有属性和方法

// 变量被'绑定'静态类型后,类型就无法更改了
// 静态类型绑定的变量可以使用该类型的所有内置属性和方法
// 注意! 静态类型小写,如 number, string; Number 等为对象包装器,不是原始类型

// ======

// 自定义静态类型:
// interface 关键字创建接口, 定义内部属性类型
interface Apple {
  name: string,
  price: number,
};
// 声明变量时,必须严格按照静态类型的属性定义
const phone: Apple = {
  name: 'Siri',
  price: 2000,
}
// 使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定
// 从中我们也可以看到, ts 更加严谨,健壮; 而 js 更加灵活,开放

// ======

// TypeScript 的两种静态类型: 基础静态类型 & 对象静态类型
// 语法 ->  ': 类型'

// 1. 基础静态类型
// 类型有 null  underfined  symbol  boolean  void  number  string
const count1: number = 1021;
const phoneName: string = 'Siri';

// 2. 对象静态类型
// 形式有 对象类型, 数组类型, 类类型, 函数类型

// 2.1 对象类型
const phone1: {
  name: string,
  price: number,
} = {
  name: 'Siri',
  price: 2000,
}
// 也可以将对象单独写成一个接口
interface HuaWei {
  name: string,
  price: number,
};
const phone2: HuaWei = {
  name: 'XiaoAi',
  price: 5000,
}

// 2.2 数组类型
// 必须传入数组, 且数组内容必须为字符串; 注意 String 首字母大写(此处不是写string原始类型)
const phone3: String[] = ['Huawei', 'Xiaomi', 'apple'];
// const phone3: String[] = ['Huawei', 123];  // 报错,不能在字符串数组内赋number值

// 2.3 类类型
class Person { }
const phone4: Person = new Person() // 必须赋值 Person 类对应的对象

// 2.4 函数类型
// 变量必须是赋值一个函数,且函数返回值必须为 string
const phone5: () => string = () => {
  return 'Siri'
}
